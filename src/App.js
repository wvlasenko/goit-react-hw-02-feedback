import { Component } from 'react';
import './App.css';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';
import FeedbackOptions from './components/FeebackOptions/FeedackOtions';
import Section from './components/Section';

export default class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };
    updateFeedback = type => {
        this.setState(prevStat => {
            return {
                [type]: prevStat[type] + 1,
            };
        });
    };

    countTotalFeedback = () => {
        return Object.values(this.state).reduce((acc, value) => acc + value, 0);
    };

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;

        const ratio = Math.round((good / this.countTotalFeedback()) * 100);

        return ratio;
    };
    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={this.state}
                        onLeaveFeedback={this.updateFeedback}
                    />
                </Section>

                {total === 0 ? (
                    <Notification massage={'No feedback given'} />
                ) : (
                    <Section title="Statistics">
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                        />
                    </Section>
                )}
            </>
        );
    }
}

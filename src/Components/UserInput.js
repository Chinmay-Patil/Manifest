import React, { useContext } from "react";
import { ChatContext } from '../Components/Chat';
import { Button } from '@material-ui/core';
import '../Styles/ChatWin.css';
import DatePicker from 'react-date-picker'



function UserInput() {
    const { messages, userClickedYes, userSelectedDate, userClickedNo, showUserInput, resetChat } = useContext(ChatContext);  //use context 
    const yesMessages = ['Yes, I do!', 'Yes', 'Active'];  //Types of positive msg
    const noMessages = ['No', 'Not Really', 'Passive'];  //types of negative msg
    const userMessageCount = messages.reduce((count, message) => {   //Subtraction
        if (!message.isAdmin) {
            count++;
        }
        return count;
    }, 0);


    //following jsx works on user msg count

    //Note--Tried to use the auto scroll... but didnt work so removed.

    return (
        <div className="userInput">
            {showUserInput
                ? userMessageCount < 3
                    ? <div className="choice_pg1">
                        <div className="choice1">
                            <button onClick={() => userClickedYes(yesMessages[userMessageCount])}> {yesMessages[userMessageCount]} </button>
                        </div>
                        <div className="choice2">
                            <button onClick={() => userClickedNo(noMessages[userMessageCount])}> {noMessages[userMessageCount]} </button>
                        </div>
                    </div>
                    : userMessageCount === 3
                        ?
                        <div className="date_picker">
                            <DatePicker onChange={userSelectedDate} />
                        </div>
                        : userMessageCount > 3
                            ?
                            <div className="confirm_button">
                                <Button onClick={resetChat}>Confirm</Button>
                            </div>
                            : null
                : null
            }
        </div>
    )
}

export default UserInput

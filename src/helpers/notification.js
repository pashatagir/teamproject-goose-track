const { createContext, useContext, useState } = require("react");

export const NotificationContext = createContext();

export const NotificationProvider = ({children}) => {

    const [isVisible, setIsVisible] = useState(false);
    const [text, setText] = useState('');
    const [type, setType] = useState('info');

    const changeContext = {
        text: setText,
        type: setType,
        visibility: setIsVisible
    }

    return(
        <NotificationContext.Provider value={{isVisible, text, type, changeContext}}>
            {children}
        </NotificationContext.Provider>
    )
};

export const useNotification = () => useContext(NotificationContext).changeContext;

export const notification = (changeContext, type='info', text, time='3000') => {

    const notificationTypes = ['success', 'fail', 'info'];
    const correctType = notificationTypes.some(item => item === type);
    if(!correctType) {
        console.log(`Use one of type arguments for your notification: ${notificationTypes}`);
        return;
    };

    changeContext.type(type)
    changeContext.text(text);
    changeContext.visibility(true);

    const hideNotification = () => {
        changeContext.type('info');
        changeContext.text('');
        changeContext.visibility(false);
    }
    setTimeout(hideNotification, time);
}
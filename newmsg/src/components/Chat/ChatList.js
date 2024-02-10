// import { ListItem } from '@mui/material';
// import { List } from '@mui/material';
import { useSelect } from '@mui/base';
import { chainPropTypes } from '@mui/utils';
import { onValue, remove, set } from 'firebase/database';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useBeforeUnload } from 'react-router-dom';
import { Chat, chat } from '../../screen/Chat/Chat';
import { chatsRef, getChatRefById, getMsgsRefById } from '../../services/firebase';
import { addChat, deleteChat } from '../../store/chats/actions';
import { selectChats } from '../../store/chats/selectors';
import { clearMessages, initMessagesForChat } from '../../store/messages/actions';
import { Form } from '../Form/Form';
import { MessageList } from '../MessageList/MessageList';
import './ChatList.style.css';


export const ChatList = () => {
    const [chats, setChats] = useState([]);
    // const chats = useSelector(selectChats);
    const dispatch = useDispatch();

    const handleSubmit = (newChatName) => {
        const newChat = {
            name: newChatName,
            id: `chat-${Date.now()}`,
        };

        // dispatch(addChat(newChat));
        set(getChatRefById(newChat.id), newChat);
        set(getMsgsRefById(newChat.id), { exists: true });
        // dispatch(initMessagesForChat(newChat.id));
    };

    const handleRemoveChat = (id) => {
        // dispatch(deleteChat(id));
        // set(getChatRefById(id), null);
        // set(getMsgsRefById(id), null);
        remove(getChatRefById(id)); /*под капотом сама выполняет*/
        dispatch(clearMessages(id));
    };

    useEffect(() => {
        const unsubscribe = onValue(chatsRef, (snapshot) => {
            console.log(snapshot.val());
            setChats(Object.values(snapshot.val() || {}));
        });
        return unsubscribe;
    }, []);

    return (
        <>
            < div className="chat_first" >
                <div className="chat-list">
                    {chats.map((chat) => (
                        <Link to={`${chat.id}`} key={chat.id}>{chat.name}
                            <button className='deleteChat' onClick={() => handleRemoveChat(chat.id)}>
                                Удалить</button></Link>
                    ))}
                </div>
                <Form onSubmit={handleSubmit} />
                <Outlet></Outlet>
            </div >
        </>
    );
};

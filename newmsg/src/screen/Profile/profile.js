import { useDispatch, useSelector } from "react-redux";
import { initProfileTrack, setName, setNameFB, setShowName, SET_NAME, stopProfileTrack, toggleCheckbox } from "../../store/profile/actions.js";
import * as React from 'react';
import { Checkbox } from '@mui/material/Checkbox';
import { Form } from "../../components/Form/Form";
import { selectName, selectShowName } from "../../store/profile/selectors.js";
import { auth, logOut, userNameRef, userRef, userShowNameRef } from "../../services/firebase.js";
import { usePrev } from "../../extra/usePrev.js";
import { snapshot, onValue, set } from "firebase/database";
import './profile.style.css';


export const Profile = ({ onLogout }) => {
    const dispatch = useDispatch();

    const name = useSelector(selectName);
    const showName = useSelector(selectShowName);
    // console.log(state);
    const handleClick = () => {
        dispatch(setShowName(!showName));
    };

    // const prevName = usePrev(name);
    // console.log(auth);

    const handleSubmit = (text) => {
        dispatch(setNameFB(text));
    };
    // dispatch(setName(text));

    React.useEffect(() => {
        dispatch(initProfileTrack());

        return () => {
            dispatch(stopProfileTrack());
        };
    }, []);

    return (
        <div className="profilePage">
            <h3 className="headerPage">Твой профиль</h3>
            {/* <div className="сontrolPanelProfile"> */}
            <button className="Logout" onClick={logOut}>Выход</button>
            {showName && <span className="outputName">{name}</span>}
            <button className="changeName" onClick={handleClick}>Изменить имя</button>
            {/* </div> */}
            <Form onSubmit={handleSubmit} />
        </div>
    );
};
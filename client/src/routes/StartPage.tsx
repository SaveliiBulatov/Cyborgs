import React from "react";
import { Navigate } from "react-router-dom";
import "../StartPage.css";

const playButtonImage = process.env.PUBLIC_URL + "/assets/image/Robot_favikon.png";

const StartPage = () => {
    const [loginSuccess, setLoginSuccess] = React.useState(false);

    const handlePlay = () => {
        setLoginSuccess(true);
    };

    return (
        <>
            <div className="center-container">
                {loginSuccess && <Navigate to="/main" replace={true} />}
                <button className="play-button" onClick={handlePlay}>
                    <img
                        src={playButtonImage}
                        alt="Play button"
                        className="play-button-image"
                    />
                </button>
                <div className="game-description">
                    <h1>КИБОРГИ ТЕПЕРЬ В 2D</h1>
                    <p>
                        Готовьтесь к взрывной битве в мире "Cyborgs" — мультиплеерном шутере в формате 2D, где киборги сражаются за выживание в постапокалиптической арене. Ваш путь к славе начинается здесь, в этом мире хаоса и технологической войны.<br/>
                        <br/>Особенности:<br/>Динамичные Мультиплеерные Сражения: Присоединяйтесь к многопользовательским боям, где силы киборгов сходятся в огненном противостоянии. Определите свой стиль игры и превратитесь в неудержимого воина.<br/>
Разнообразные Классы и Навыки: Выбирайте свой уникальный класс киборга с особыми умениями. От снайпера до ближнего боя — каждый киборг вносит свой вклад в стратегию команды.<br/>
Тактическое Сотрудничество: Командная игра — ключ к успеху. Разрабатывайте стратегии с товарищами, координируйте атаки и обеспечивайте поддержку, чтобы одерживать победы в суровых боях.<br/>
Эпические Карты Разрушенного Мира: Погрузитесь в декорации разрушенных городов, пустынных улиц и подземных бункеров. Каждая карта — это новая территория для беспощадных сражений.<br/>
Прокачиваемые Оружия и Экипировка: Получайте опыт и ресурсы за победы, чтобы улучшать свое оружие и экипировку. Создайте идеальный бойцовский набор для своего стиля игры.<br/>
Соревновательный Режим: Примите участие в соревновательных сезонах, поднимайтесь по рейтингу и докажите, что ваша команда — лучшая в мире "Cyborgs".
Поднимитесь на вершину кибернетической иерархии в "Cyborgs" — где выживание — это ваша единственная цель, а битва — ваша вторая природа. Соберите свою команду, вступайте в бой и докажите свое превосходство в этом захватывающем мультиплеерном мире!
                    </p><button className="play-button" onClick={handlePlay}>
                    <h1>Играть</h1>
                </button>
                </div>
            </div>
        </>
    );
};

export default StartPage;
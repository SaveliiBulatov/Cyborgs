import { TError } from "../modules/Server/types";

const getError = (error: TError) => {
    let errorMessage = "";
    if (error.code !== 202 && error.text !== "") {
        switch (error.code) {
            case 102:
                errorMessage = "Метод не найден";
                break;
            case 242:
                errorMessage = "Не все поля заполнены";
                break;
            case 404:
                errorMessage = "Страница не найдена";
                break;
            case 605:
                errorMessage = "Команда заполнена";
                break;
            case 700:
                errorMessage = "Нет скинов";
                break;
            case 701:
                errorMessage = "Скин не найден";
                break;
            case 705:
                errorMessage = "Пользователь не найден";
                break;
            case 706:
                errorMessage = "Пустое сообщение";
                break;
            case 707:
                errorMessage = "Не удалось отправить сообщение";
                break;
            case 708:
                errorMessage = "Неверный код подтверждения";
                break;
            case 709:
                errorMessage = "Непредвиденная ошибка";
                break;
            case 800:
                errorMessage = "Объект не найден";
                break;
            case 801:
                errorMessage = "Ошибка восстановление пароля";
                break;

            case 1001:
                errorMessage = "Укажите логин или пароль";
                break;
            case 1002:
                errorMessage = "Ошибка авторизации";
                break;
            case 1003:
                errorMessage = "Такой пользователь уже зарегистрирован";
                break;
            case 1004:
                errorMessage = "Невозможно найти пользователя";
                break;
            default:
                errorMessage = "Непредвиденная ошибка";
                break;
        }
        return errorMessage;
    } else {
        console.log(error.text);
        console.log(error.code);
        errorMessage = "";
        return errorMessage;
    }
};
export default getError;

const conversation1 = {
  user: "_QuackY_",
  messages: [
    {
      text: "Halla balla hva skjera?",
      user: {
        name: "_Quacky_",
        avatarUrl:
          "https://media-exp1.licdn.com/dms/image/D4D35AQFevl7ubMVLLQ/profile-framedphoto-shrink_200_200/0/1637567204999?e=1661119200&v=beta&t=dTgH8U1lBk7ADSl-Ni2ZVcH7-cOwtUlgywu0HxUAEso",
      },
      date: "Today at 2:54",
    },
    {
      text: "Lite, hva skjer der? SKal vi kode?",
      user: {
        name: "Odi",
        avatarUrl:
          "https://lh3.googleusercontent.com/ogw/AOh-ky2RszC02U_WWxBv1mGrzNzLI8DMQU7kfghmVkMgFg=s32-c-mo",
      },

      date: "Today at 2:57",
    },
    {
      text: "Greit la oss gjøre det",
      user: {
        name: "_Quacky_",
        avatarUrl:
          "https://media-exp1.licdn.com/dms/image/D4D35AQFevl7ubMVLLQ/profile-framedphoto-shrink_200_200/0/1637567204999?e=1661119200&v=beta&t=dTgH8U1lBk7ADSl-Ni2ZVcH7-cOwtUlgywu0HxUAEso",
      },
      date: "Today at 2:57",
    },
  ],
};
const conversation2 = {
  user: "Kenzy",
  messages: [
    {
      text: "Skal vi kode?",
      user: {
        name: "Odi",
        avatarUrl:
          "https://lh3.googleusercontent.com/ogw/AOh-ky2RszC02U_WWxBv1mGrzNzLI8DMQU7kfghmVkMgFg=s32-c-mo",
      },

      date: "Today at 2:57",
    },
    {
      text: "Ja young young padawan?",
      user: {
        name: "Kenzy",
        avatarUrl:
          "data:image/png;base64,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",
      },
      date: "Today at 2:54",
    },
    {
      text: "Skal vi kode nå",
      user: {
        name: "Kenzy",
        avatarUrl:
          "data:image/png;base64,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",
      },
      date: "Today at 2:57",
    },
  ],
};

const conversation3 = {
  user: "Øyvind",
  messages: [
    {
      text: "Nå jobber jeg med bitnord",
      user: {
        name: "Øyvind",
        avatarUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZuWSPCrK8phZLjZbNfHVa9elV4znmbjwEOg-DJHsr7g&s",
      },
      date: "Today at 2:54",
    },
    {
      text: "Stilig",
      user: {
        name: "Odi",
        avatarUrl:
          "https://lh3.googleusercontent.com/ogw/AOh-ky2RszC02U_WWxBv1mGrzNzLI8DMQU7kfghmVkMgFg=s32-c-mo",
      },

      date: "Today at 2:57",
    },
    {
      text: "Greit la oss gjøre det",
      user: {
        name: "Øyvind",
        avatarUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZuWSPCrK8phZLjZbNfHVa9elV4znmbjwEOg-DJHsr7g&s"
      },
      date: "Today at 2:57",
    },
  ],
};
let conversations = [conversation1, conversation2, conversation3];
console.log("hello");
const userList = document.querySelectorAll(".dm-panel__friends__friend");

userList.forEach((user) => {
  console.log(user);
  user.addEventListener("click", (e) => {
    // console.log(user.querySelector(".dm-panel__friends__friend__user__name").innerHTML)
    const userName = user
      .querySelector(".dm-panel__friends__friend__user__name")
      .innerHTML.trim();
    console.log(userName);
    if (user.classList.contains("dm-panel__active")) return;
    else {
      createConversation(userName);
      removeAllOtherUsers();
      user.classList.add("dm-panel__active");
    }
  });
});

const removeAllOtherUsers = () => {
  userList.forEach((user) => {
    user.classList.remove("dm-panel__active");
  });
};

const createConversation = (username) => {
  const userName = document.querySelector(".main-chat__top__user_name");
  const mainChatContainer = document.querySelector(".main-chat__conversation");
  const textList = conversations.filter(
    (conversation) => conversation.user === username
  );
  const theUser = conversations.filter(
    (conversation) => conversation.user === username
  )[0].user;
  console.log(textList);
  // console.log(textList.map((user) => console.log(user)))
  const html = textList[0].messages
    .map(
      (message) => `
          <div class="main-chat__conversation__odi">
            <div class="main-chat__conversation__odi_avatar">
              <img src="${message.user.avatarUrl}">
            </div>
            <div class="main-chat__conversation__odi_message">
              <div class="main-chat__conversation__odi_message__wrapper__top">
                <div class="main-chat__conversation__odi_message__name">${message.user.name}</div>
                <div class="main-chat__conversation__odi_message__date">${message.date}</div>
              </div>
              <div class="main-chat__conversation__odi_message__wrapper__bottom">
                <div class="main-chat__conversation__odi_message__text">${message.text}</div>
              </div>
            </div>
          </div>
  `
    )
    .join();
  userName.innerHTML = theUser;
  mainChatContainer.innerHTML = html;
};
const createMessage = (message, user) => {
  console.log(user)
  const oldConversation = conversations.filter((conv) => conv.user === user)
  console.log(oldConversation)
  let newMessage = {
        text: message,
        user: {
          name: "Odi",
          avatarUrl:
            "https://lh3.googleusercontent.com/ogw/AOh-ky2RszC02U_WWxBv1mGrzNzLI8DMQU7kfghmVkMgFg=s32-c-mo",
        },
        date: createTime(),
      }
  oldConversation[0].messages.push(newMessage)
  console.log(conversations)
  createConversation(user)

};
// createConversation()
// console.log(conversation1.messages)
const setupInput = () => {
const inputField = document.querySelector(".main-chat__new-message__input")
inputField.addEventListener("keyup", (e) => {
  const user = document.querySelector(".dm-panel__active").querySelector(".dm-panel__friends__friend__user__name").innerHTML.trim()
  console.log(user)
  const text = e.target.value
  if(e.key === "Enter" && text !== ""){
     createMessage(text, user)

  }
})
console.log(inputField)
}
setupInput()
const createTime = () => {
  const now = new Date();
const current = now.getHours() + ':' + now.getMinutes();
return current
}
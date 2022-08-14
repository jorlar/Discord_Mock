console.log("hello")
const userList = document.querySelectorAll(".dm-panel__friends__friend")

userList.forEach((user) => {
console.log(user)
user.addEventListener("click", (e) => {
  if(user.classList.contains("dm-panel__active")) return
  else {
    removeAllOtherUsers()
    user.classList.add("dm-panel__active")
  }
})
})

const removeAllOtherUsers = () => {
    userList.forEach((user) => {
        user.classList.remove("dm-panel__active")
    })
}
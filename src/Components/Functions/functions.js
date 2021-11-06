export const nameSocial = (Google, Git, FB) => {
    if (Google.authentication) {
      return Google.authentication.displayName
    } else if (Git.authentication) {
      return Git.authentication.displayName
    } else {
      return FB.authentication.displayName
    }
}

export const emailSocial = (Google, Git, FB) => {
    if (Google.authentication) {
      return Google.authentication.email
    } else if (Git.authentication) {
      return Git.authentication.email
    } else {
      return FB.authentication.email
    }
  }

export const lastMessage = (db) => {
    if (db != null) {
    const lastMessage = db[Object.keys(db)[Object.keys(db).length - 1]];
    return lastMessage;
    }
}

export const time = () => {
  const time = new Date();
  const timeDate = `${time.getHours() < 10 ? 0 + time.getHours().toString() : time.getHours()}:${time.getMinutes() < 10 ? 0 + time.getMinutes().toString() : time.getMinutes()} ${time.getDate() < 10 ? 0 + time.getDate().toString() : time.getDate()}.${time.getMonth() < 10 ? 0 + time.getMonth().toString() : time.getMonth()}.${time.getFullYear()}`;
  return timeDate;
}

export const printLastMessage = (lastMessage) => {
  if (lastMessage != null) {
    const wrapper = document.createElement('div');
    const name = document.createElement('p');
    if (lastMessage.name) {
      name.value = `Send by ${lastMessage.name} at ${lastMessage.time}`;
    } else {
      name.value = `Send by ${lastMessage.email} at ${lastMessage.time}`;
    }
    wrapper.value = `"${lastMessage.text}" ${name.value}`;
    const place = document.querySelectorAll('div');
    place[place.length - 2].textContent = wrapper.value;
  }
}

// export const pushNote = (lastMessage) => {
//   if (lastMessage != null) {
//     const pushNote = document.querySelectorAll('div')[document.querySelectorAll('div').length - 1];
//     if (pushNote.textContent === '') {
//       pushNote.style = `position: fixed;
//         bottom: 15;
//         left: 15;
//         background-color: white;
//         width: 300px;
//         height: 100px;
//         border-radius: 20px 40px;
//         color: grey;
//         opacity: 1;
//         padding: 20px 5px 20px 5px;
//       `;
//       pushNote.textContent = `"${lastMessage.text}" Send by ` 
//       pushNote.textContent += lastMessage.name ? lastMessage.name : lastMessage.email 
//       pushNote.textContent += ` at ${lastMessage.time}`;

//       const deletePush = () => {
//         pushNote.textContent = '';
//         pushNote.style = `opacity: 0`
//       }
//       setTimeout(deletePush, 3000);

//       return pushNote;
//     }
//   }
// }      


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
  return place[place.length - 2].textContent = wrapper.value;
}
}
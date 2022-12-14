// version sans destructuration
/*export function UserDetails(user) {
    return `<h1>${user.name}</h1>
       <p>${user.email}</p><p>${user.phone}</p>`;
  }*/

  // version avec destructuration
  export function UserDetails({name, email, phone}) {
    return `<h1>${name}</h1>
       <p>${email}</p><p>${phone}</p>`;
  }  
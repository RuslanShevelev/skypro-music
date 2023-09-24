export async function getRegistration(data, setError, login ) {
    const response = await fetch(
      `https://skypro-music-api.skyeng.tech/user/${login? 'login' : 'signup'}/`,
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json',
        },
      }
    )
    setError(!response.ok)
    console.log(response);
    const respData = await response.json()
    return respData
  }
//   fetch("https://skypro-music-api.skyeng.tech/user/login/", {
//   method: "POST",
//   body: JSON.stringify({
//     email: "gleb@fokin.ru",
//     password: "gleb@fokin.ru",
//   }),
//   headers: {
//     // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
//     "content-type": "application/json",
//   },
// })

//   export async function getLogin(data, setError) {
//     const response = await fetch(
//       'https://skypro-music-api.skyeng.tech/user/signup/',
//       {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//           'content-type': 'application/json',
//         },
//       }
//     )
//     if (!response.ok) {
//       setError(true)
//     }
//     const respData = await response.json()
//     return respData
//   }
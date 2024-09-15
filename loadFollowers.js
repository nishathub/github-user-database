// const loadFollowers = async (user) => {
//     const url = `https://api.github.com/users/${user}/followers`;
//     const res = await fetch(url);
//     if (!res.ok){
//         if(res.status === 404){
//             console.log("User not found");
//         } else{
//             console.log('Data is incomplete, try again later');
//         }
//         return;
//     }
    
//     try {
//         const data = await res.json();
//         displayFollowersData(data);
//     } catch (error) {
//         console.log(error + ' from catch');
//     }
// }
// const displayFollowersData = (data) => {
//     console.log(data);
//     console.log(data.length);
// }
// loadFollowers('programmingHero1');
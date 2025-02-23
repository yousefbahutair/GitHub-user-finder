async function fetchGitUser() {
    const input = document.querySelector('input');
    const userInfo = document.querySelector('#userInfo');
    const value = input.value.trim();
    
    if(!value) {
        alert("Please enter a GitHub username: ");
        return;
    }

    try {
        userInfo.innerHTML = `<p> Loading... </p>`
        const res = await axios.get(`https://api.github.com/users/${value}`);
        console.log("GitHub User Details", res.data);
        // details
        userInfo.innerHTML =
        `<li>Username: <strong>${res.data.login}</strong></li>
        <li>Bio: <strong>${res.data.bio}</strong></li>
        <li>Followers: <strong>${res.data.followers}</strong> </li>
        <li>Public Repos: <strong>${res.data.public_repos}</strong> </li>`
    } catch(err){
        userInfo.innerHTML =
        `<p style="color: red;">User not found. Try again..</p>`;
        console.log("Error fetching user, please try again", err);
    }
}
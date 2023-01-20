function getgit(){
    fetch("https://api.github.com/users/adion81")
        .then(response => response.json() )
        .then(data => {
            console.log(data);
            var user = document.getElementById('container')
            let header = document.createElement('h1');
            let image = document.getElementById('pic');
            header.innerHTML = `${data.name} has ${data.followers} followers.`
            user.appendChild(header)
            image.src = data.avatar_url
            user.appendChild(image)
        } )
        .catch(err => console.log(err) )

}

// async function getCoderData() {
//     // The await keyword lets js know that it needs to wait until it gets a response back to continue.
//     var response = await fetch("https://api.github.com/users/adion81");
//     // We then need to convert the data into JSON format.
//     var coderData = await response.json();
//     return coderData;
// }
    
// console.log(getCoderData());
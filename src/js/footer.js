const updateFooter = () => {
    const slogans = [
        'Vulkan lives',
        'The flesh is weak',
        'The Doom of Eldanesh',
        'No all who wander are lost',
        'West of Arkham...',
        'It wouldn\'t be the same without them',
        'Hatred outlives the hateful',
        'Breathe deep the gathering gloom',
        'Oh my God, its full of stars',
        'One amoung the Fence',
        'Gabba Gabba Hey',
    ]
    
    const index = Math.floor(Math.random() * slogans.length)
    
    document.getElementById('slogan').innerHTML = slogans[index]    
}

export default updateFooter
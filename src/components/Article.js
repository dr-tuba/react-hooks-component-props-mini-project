function Article({ title, date = 'January 1, 1970', preview, minutes }) {
    function displayCoffeeOrBentoBoxes({minutes}) {
        console.log(minutes)
        if (minutes <= 5) {
            return (` • ☕️ ${minutes} min read`)
        } else if (minutes > 5 && minutes <= 10) {
            return (` • ☕️☕️ ${minutes} min read`)
        } else if (minutes > 10 && minutes <= 15) {
            return (` • ☕️☕️☕️ ${minutes} min read`)
        } else if (minutes > 15 && minutes <= 20) {
            return (` • ☕️☕️☕️☕️ ${minutes} min read`)
        } else if (minutes > 20 && minutes <= 25) {
            return (` • ☕️☕️☕️☕️☕️ ${minutes} min read`)
        } else if (minutes > 25 && minutes <= 30) {
            return (` • ☕️☕️☕️☕️☕️☕️ ${minutes} min read`)
        } else if (minutes > 30 && minutes <= 40) {
            return (` • 🍱🍱🍱🍱 ${minutes} min read`)
        } else if (minutes > 40 && minutes <= 50) {
            return (` • 🍱🍱🍱🍱🍱 ${minutes} min read`)
        } else if (minutes > 50 && minutes <= 60) {
            return (` • 🍱🍱🍱🍱🍱🍱 ${minutes} min read`)
        } else if (minutes > 60 && minutes <= 70) {
            return (` • 🍱🍱🍱🍱🍱🍱🍱 ${minutes} min read`)
        } else if (minutes > 70 && minutes <= 80) {
            return (` • 🍱🍱🍱🍱🍱🍱🍱🍱 ${minutes} min read`)
        } else if (minutes > 80 && minutes <= 90) {
            return (` • 🍱🍱🍱🍱🍱🍱🍱🍱🍱 ${minutes} min read`)
        }
    }

    return (
    <article>
        <h3>{title}</h3>
        <small>{date}</small><span>{displayCoffeeOrBentoBoxes({ minutes })}</span>
        <p>{preview}</p>
    </article> 
    )
}

export default Article;
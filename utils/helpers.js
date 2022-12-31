module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
    formate_amount: (amount) => {
        return parseInt(amount).toLocaleString();
    },
    get_emoji: () => {
        const randomNum = Math.random();
        if(randomNum > 0.7){
            return `<span></span>`;
        } else if (randomNum > 0.4){
            return `<span></span>`;
        }else {
            return `<span></span>`;
        }

    },
};
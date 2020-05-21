class Wallet {
    constructor(money) {
        let _money = money;
        //get actual credits amount
        this.getWalletValue = () => _money;

        //Check if user has enough credits
        this.checkCanPlay = value => {
            if (_money >= value) return true;
            return false;
        }

        this.changeWallet = (value, type = "+") => {
            if (typeof value === "number" && !isNaN(value)) {
                if (type === "+") {
                    return _money += value;
                } else if (type === '-') {
                    return _money -= value;
                } else {
                    throw new Error('malfunction!')
                }
            } else {
                throw new Error("wrong number");
            }
        }
    }
}

const wallet = new Wallet(200)
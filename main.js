var app = new Vue({
    el: '#app',
    data: {
        my: '',
        your: '',
        num: 1,
        vv: ''
    },
    methods: {
        btnClick() {
            if(this.my === 'let'){
                if(this.your === 'den'){
                    this.vv = this.num * 365
                }else if(this.your === 'nedel'){
                    this.vv = this.num * 52.1429
                }else if(this.your === 'mesets'){
                    this.vv = this.num * 12
                }else if(this.your === 'let'){
                    this.vv = this.num * 1
                }
            }else if(this.my === 'mesets'){
                if (this.your === 'den'){
                    this.vv = this.num * 30.417
                }else if(this.your === 'nedel'){
                    this.vv = this.num * 4.345
                }else if(this.your === 'mesets'){
                    this.vv = this.num * 1
                }else if(this.your === 'let'){
                    this.vv = this.num / 12
                }
            }else if(this.my === 'nedel'){
                if(this.your === 'den'){
                    this.vv = this.num * 7
                }else if(this.your === 'nedel'){
                    this.vv = this.num * 1
                }else if(this.your === 'mesets'){
                    this.vv = this.num / 4.345
                }else if(this.your === 'let'){
                    this.vv = this.num / 52.1429
                }
            }else if(this.my === 'den'){
                if(this.your === 'den'){
                    this.vv = this.num * 1
                }else if(this.your === 'nedel'){
                    this.vv = this.num / 7
                }else if(this.your === 'mesets'){
                    this.vv = this.num / 30.417
                }else if(this.your === 'let'){
                    this.vv = this.num / 365
                }
            }

        },

    }
})
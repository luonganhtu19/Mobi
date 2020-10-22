class Mess {
    constructor() {
        this.sent = [];
        this.inbox = [];
        this.draft = [];
    }

    setSent(sent) {
        this.sent.push(sent);
    }

    setInbox(inbox) {
        this.inbox.push(inbox);
    }

    setDraft(draft) {
        this.draft = draft;
    }
}

class Mobi {
    constructor() {
        this.battery = 100;
        this.status = false;
    }

    setStatusMobi(status) {
        this.status = status;
    }

    setBatterry(battery) {
        this.battery = battery;
    }

    setChargeBatery(charge) {
        if (charge < 100) this.battery++;
    }
}

let run;
let run2;
let count = 0;
let nokia = new Mobi();
let mess1 = new Mess();
let iphone = new Mobi();
let str = '';
let strRece = '';

function checkTypeMobi(id) {
    if (id == 1) {
        return iphone;
    } else {
        return nokia;
    }
}

function turnOffOn(value) {
    let status = checkTypeMobi(value).status;
    // alert(checkTypeMobi(value).status)
    if (status) {
        checkTypeMobi(value).setStatusMobi(false);
        document.getElementById(`tshow${value}`).innerHTML = `<p style="font-size: 40px;text-align: center" >GoodBye</p>`;
        count = 1;

    } else {

        checkTypeMobi(value).setStatusMobi(true);
        document.getElementById(`tshow${value}`).innerHTML = `<p style="font-size: 40px;text-align: center" >Welcome</p>`;
        count = 1;
    }
    if (value == 1) {
        run = setInterval(clearHtml, 3000);
    } else {
        run2 = setInterval(clearHtml2, 3000);
        //alert(2)
    }

}

function inputMess(id) {
    let statusMobi = checkTypeMobi(id).status;
    if (statusMobi) {
        document.getElementById(`tshow${id}`).innerHTML = `<textarea class="dis" id="input${id}"  placeholder="input Mess"></textarea>`
    }
}

function sendMess(id) {
    let statusMobi = checkTypeMobi(id).status
    if (statusMobi) {
        if (id == 1) {
            mess1.setSent(document.getElementById(`input${id}`).value);
        } else {
            mess1.setInbox(document.getElementById(`input${id}`).value);
        }
        document.getElementById(`tshow${id}`).innerHTML = `<p style="font-size: 40px;text-align: center" >Send Success</p>`;
        count = 1;
        if (id == 1) {
            run = setInterval(clearHtml, 3000);
        } else {
            run2 = setInterval(clearHtml2, 3000);
        }
    }
}

function draftMess(id) {
    let str = document.getElementById(`input${id}`).value;
    mess1.draft[id - 1] = str;
    count = 1;
    if (id == 1) {
        run = setInterval(clearHtml, 3000);
    } else {
        run2 = setInterval(clearHtml2, 3000);
        // alert(2)
    }
}

function listSent(id) {
    let str = ""
    let statusMobi = checkTypeMobi(id).status;
    if (statusMobi) {
        for (let i = 0; i < mess1.sent.length; i++) {
            str += `<p>${mess1.sent[i]}</p><hr>`
        }
        document.getElementById(`tshow${id}`).innerHTML = str;
    }
}

function listReceive(id) {
    let strRece = "";
    let statusMobi = checkTypeMobi(id).status;
    if (statusMobi) {
            for (let i = 0; i < mess1.inbox.length; i++) {
                strRece += `<p>${mess1.inbox[i]}</p><hr>`;
                //alert(mess1.inbox);
            }
        }
        document.getElementById(`tshow${id}`).innerHTML = strRece;
}

function clearHtml() {
    document.getElementById("tshow1").innerHTML = "";
    if (count == 1) {
        clearInterval(run);
        count = 0;
    }
}

function clearHtml2() {
    document.getElementById("tshow2").innerHTML = "";
    if (count == 1) {
        clearInterval(run2);
        count = 0;
        //alert(2)
    }
}





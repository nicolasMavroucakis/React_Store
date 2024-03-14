import React from "react";
import StartFirebase from "../FirebaseConfig";
import { ref, set, update, remove, get, child } from 'firebase/database';
import { Link } from "react-router-dom";


export class Crud extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            db: '',
            username: '',
            fullname: '',
            phonenumber: '',
            dob: '',
            password: '',
            dadosVerificado: false
        }
        this.interface = this.interface.bind(this);
    }

    componentDidMount() {
        this.setState({
            db: StartFirebase()
        });
    }
    render() {
        const pathname =  window.location.pathname
        let user_is_verified = false

        if (pathname === '/login') {
            return (
                <>
                    <label>Enter Full name</label>
                    <input type="text" id="namebox" value={this.state.fullname} onChange={e => { this.setState({ fullname: e.target.value }) }} />
                    <br /><br />

                    <label>Enter Password</label>
                    <input type="password" id='passwordbox' value={this.state.password} onChange={e => { this.setState({ password: e.target.value }) }} />
                    <br /><br />

                    <button id="logBtn" onClick={this.interface}>Log In</button>
                </>
            )
        }
        else if ( pathname == '/signin') {
            return (
                <>
                    <label>Enter Username</label>
                    <input type="text" id="userbox" value={this.state.username} onChange={e => { this.setState({ username: e.target.value }) }} />
                    <br /><br />
    
                    <label>Enter Full name</label>
                    <input type="text" id="namebox" value={this.state.fullname} onChange={e => { this.setState({ fullname: e.target.value }) }} />
                    <br /><br />
    
                    <label>Enter Phone Number</label>
                    <input type="number" id="phonebox" value={this.state.phonenumber} onChange={e => { this.setState({ phonenumber: e.target.value }) }} />
                    <br /><br />
    
                    <label>Choose Date of Birth</label>
                    <input type="date" id="datebox" value={this.state.dob} onChange={e => { this.setState({ dob: e.target.value }) }} />
                    <br /><br />
    
                    <button id="addBtn" onClick={this.interface}>Add Data</button>
                </>
            )
        }
        else {
            return (
                <>
                    <label>Enter Username</label>
                    <input type="text" id="userbox" value={this.state.username} onChange={e => { this.setState({ username: e.target.value }) }} />
                    <br /><br />

                    <label>Enter Password</label>
                    <input type="password" id='passwordbox' value={this.state.password} onChange={e => { this.setState({password : e.target.value})}}/>
                    <br/><br/>

                    <label>Enter Full name</label>
                    <input type="text" id="namebox" value={this.state.fullname} onChange={e => { this.setState({ fullname: e.target.value }) }} />
                    <br /><br />

                    <label>Enter Phone Number</label>
                    <input type="number" id="phonebox" value={this.state.phonenumber} onChange={e => { this.setState({ phonenumber: e.target.value }) }} />
                    <br /><br />

                    <label>Choose Date of Birth</label>
                    <input type="date" id="datebox" value={this.state.dob} onChange={e => { this.setState({ dob: e.target.value }) }} />
                    <br /><br />

                    <button id="addBtn" onClick={this.interface}>Add Data</button>
                    <button id="updateBtn" onClick={this.interface}>Update Data</button>
                    <button id="deleteBtn" onClick={this.interface}>Delete Data</button>
                    <button id="selectBtn" onClick={this.interface}>Get Data from DB</button>
                    <Link to='/login'>Login</Link>
                </>
            )
        }
    }

    interface(event) {
        const id = event.target.id;

        if (id === 'addBtn') {
            this.insertData();
        }
        else if (id === 'updateBtn') {
            this.updateData();
        }
        else if (id === 'deleteBtn') {
            this.deleteData();
        }
        else if (id === 'selectBtn') {
            this.selectData();
        }
        else if (id === 'logBtn') {
            this.verifyData();
        }
    }

    getAllInputs() {
        return {
            username: this.state.username,
            name: this.state.fullname,
            phone: this.state.phonenumber,
            dob: this.state.dob,
            password: this.state.password
        }
    }

    insertData() {
        const db = this.state.db;
        const data = this.getAllInputs();

        set(ref(db, 'Customer/' + data.username), {
            Fullname: data.name,
            Phonenumber: data.phone,
            dateofbirth: data.dob,
            password: data.password
        })
        .then(() => { alert('Data was added successfully'); })
        .catch((error) => { alert('There was a problem adding the data: ' + error.message); });
    }

    updateData() {
        const db = this.state.db;
        const data = this.getAllInputs();

        update(ref(db, 'Customer/' + data.username), {
            Fullname: data.name,
            Phonenumber: data.phone,
            dateofbirth: data.dob,
            password: data.password
        })
        .then(() => { alert('Data was updated successfully'); })
        .catch((error) => { alert('There was a problem updating the data: ' + error.message); });
    }

    deleteData() {
        const db = this.state.db;
        const data = this.getAllInputs();

        remove(ref(db, 'Customer/' + data.username))
        .then(() => { alert('Data was deleted successfully'); })
        .catch((error) => { alert('There was a problem deleting the data: ' + error.message); });
    }

    selectData() {
        const db = this.state.db;
        const data = this.getAllInputs();

        get(child(ref(db), 'Customer/' + data.username))
        .then((snapshot) => {
            if (snapshot.exists()) {
                this.setState({
                    fullname: snapshot.val().Fullname,
                    phonenumber: snapshot.val().Phonenumber,
                    dob: snapshot.val().dateofbirth,
                    password: snapshot.val().password,
                });
            } else {
                alert('No data found for this username');
            }
        })
        .catch((error) => { alert('There was a problem fetching the data: ' + error.message); });
    }

    verifyData() {
        const db = this.state.db;
        const data = this.getAllInputs();

        get(child(ref(db), 'Customer/' + data.username))
            .then((snapshot) => {
                let fullname_ver = '';
                let password_ver = '';
                if (snapshot.exists()) {
                    fullname_ver = snapshot.val().Fullname;
                    password_ver = snapshot.val().Password;
                } else {
                    alert('No data found for this username');
                }
                if (data.username === fullname_ver && data.password === password_ver) {
                    this.setState({ dadosVerificado: true }, () => {
                        if (this.state.dadosVerificado) {
                            this.props.history.push("/");
                        } else {
                            alert("dados incompatíveis");
                        }
                    });
                }
            })
            .catch((error) => { alert('There was a problem fetching the data: ' + error.message); });
    }

}
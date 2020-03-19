import React from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import moment from 'moment';
import { MyButton, MyWhiteButton, MyGreyButton } from '../component/MyButton';
import { MyHeader } from '../component/MyTitle'
import EmptyBox from '../component/EmptyBox';

const formatter = date => moment(date).format('MMMM Do YYYY, h:mm a');
class AdminWithdrawal extends React.Component {
    state = { list: [] }
    componentDidMount() {
        this.fetchData()
    }
    fetchData = async () => {
        const response = await axios.get("http://localhost:4000/admin/withdrawal/request");
        const { success, request } = response.data
        if (success) {
            this.setState({ list: request })
        }
    }
    handleApprove = async id => {
        const { username: admin_name } = this.props.user;
        const response = await axios.post("http://localhost:4000/admin/withdrawal-approve", { id, admin_name });
        const { success } = response.data
        if (success) {
            this.fetchData()
        }
    }

    handleReject = async id => {
        const { username: admin_name } = this.props.user;
        const response = await axios.post("http://localhost:4000/admin/withdrawal-reject", { id, admin_name });
        const { success } = response.data
        if (success) {
            this.fetchData()
        }
    }
    render() {
        return (
            <Grid container direction="column" justify="center" style={{ width: "100%" }}>
                <MyHeader style={{ justifyContent: 'left' }}>
                    > Withdrawal request log
                </MyHeader>
                <div style={{ margin: "32px 0", alignSelf: 'center' }}>
                    <EmptyBox data={this.state.list} />
                    {this.state.list.map((
                        {
                            id,
                            member_id,
                            amount,
                            created_at,
                            account_name,
                            account_number,
                            bank_name,
                            username,
                            photo,
                            balance,
                            firstname,
                            lastname
                        }
                    ) =>
                        <div key={id} style={{ maxWidth: 740, display: 'flex', border: "1px solid #C4C4C4", padding: '24px 48px', marginBottom: '16px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '150px', marginRight: '16px' }}>
                                <img
                                    src={photo}
                                    height={100}
                                    width={100}
                                    style={{ alignItems: 'center', borderRadius: "100%", marginBottom: "16px" }}
                                />
                                <div style={{ alignSelf: 'center', marginBottom: "8px" }}>{username}</div>
                                <div style={{ color: "#C78899", border: "1px solid #C78899", padding: "2px 16px" }}>{balance} ฿</div>
                            </div>
                            <div style={{ flexGrow: 4, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div> <b>Member ID:</b> {member_id}</div>
                                <div> <b>Name:</b> {firstname} {lastname}</div>
                                <div> <b>Account holder name:</b> {account_name}</div>
                                <div> <b>Bank account number:</b> {account_number}</div>
                                <div> <b>Bank:</b> {bank_name}</div>
                                <div> <b>Amount:</b> <div style={{ color: balance < amount ? 'red' : 'black', display: 'inline' }}> {amount} ฿</div></div>
                                <div> <b>Created at:</b> {formatter(created_at)}</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '24px' }}>
                                {(balance < amount) && <MyGreyButton style={{ marginBottom: '16px' }} disabled>Approve</MyGreyButton>}
                                {!(balance < amount) && <MyButton style={{ marginBottom: '16px' }} onClick={() => this.handleApprove(id)} >Approve</MyButton>}
                                <MyWhiteButton onClick={() => this.handleReject(id)}>Reject</MyWhiteButton>
                            </div>
                        </div>
                    )}
                </div>
            </Grid>
        )
    }
}

export default AdminWithdrawal;
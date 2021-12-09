import React, {useState} from 'react';
import { TouchableOpacity } from 'react-native';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Typography } from '@material-ui/core';

function get_cords(theta,radius){
    return {
    x: Math.cos(theta) * radius,
    y: Math.sin(theta) * radius
    }
}


function RoundButton(props) {
    const [visibleModal,setVisible]=useState(false)
    const handleClose = () => {setVisible(false);console.log('Hide')};
    const handleShow = () => {setVisible(true);console.log('Show')};

    let cords= get_cords(props.theta, props.radius)
    
    return (
        <div>
            <TouchableOpacity style= {{...styles.button, left:`${props.center.x + cords.x}px`, top:`${props.center.y - cords.y}px`}} onPress={()=>handleShow()}>
                <img src={require('../images/'+props.sphere_img).default } alt="" style={styles.sphere_image}/>
            </TouchableOpacity> 
            <Dialog open={visibleModal}
                    onClose={() => handleClose()}
            >
                <DialogTitle><Typography variant="h3" align="center">{props.titulo}</Typography></DialogTitle>
                <img src={require('../images/'+props.dialog_img).default } alt="" style={styles.dialog_image}/>
            </Dialog>
        </div>
    );
}

const styles={
    button:{
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'blue',
        borderRadius:50,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        height: '100px',
        width: '100px',
    },
    sphere_image:{
        height: '100px',
        width: '100px',
        borderRadius: '50px'
    },
    dialog_image:{
        height: '600px',
        width: '600px',
    }
}

export default React.memo(RoundButton);
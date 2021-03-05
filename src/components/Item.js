
import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Button } from 'react-native';

class Item extends Component{
    constructor(props){
        super(props)
    }ed
    onDelete(id){
        const {ondelete} = this.props;
        ondelete(id);
    }
    render(){
        return(
            <View style={styles.containerList}>
                <View style={styles.textstyle}>
                    <Text>{this.props.name} </Text>
                </View>
                <View>
                    <Button 
                        title='Borrar'
                        onPress={()=>{
                            this.onDelete(this.props.id)
                        }}
                     />
                </View>
            </View>
        )
    }

}

const styles=StyleSheet.create({
    image:{
        width:100,
        height:100,
    },
    containerList:{
        flexDirection: 'row',
        backgroundColor: '#FF00FF',
        marginTop: 6,
        padding:12,
        borderRadius: 12,
        elevation:6,
    },
    textstyle:{
        justifyContent: 'flex-start',
        width: '70%'
    }
})

export default Item;
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import style from './styles';

export default function CardServices({ image, item, price }) {
    return (
        <View style={style.main}>
            <View style={style.card}>
                <Image style={style.top} source={{uri: image}}/>
                <View style={style.text}>
                    <Text style={style.item}>{item}</Text>
                    <Text style={style.price}>Rp. {price}/Kg</Text>
                </View>
            </View>
        </View>
    );
}

CardServices.propTypes = {  
  item: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.number.isRequired
};

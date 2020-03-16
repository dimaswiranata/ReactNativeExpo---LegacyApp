import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import style from './styles';

export default function CardQueue({ name, number }) {
    return (
        <View style={style.main}>
            <View style={style.card}>
                <View style={style.top}>
                    <View style={style.title}>
                        <Text style={style.text}>Nomor Antrian</Text>
                    </View>                   
                </View>
                <View style={style.queue}>
                    <Text style={style.number}>{number}</Text>
                    <Text style={style.name}>{name}</Text>
                </View>
            </View>
        </View>
    );
}

CardQueue.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

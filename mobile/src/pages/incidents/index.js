import React, {useState, useEffect} from 'react';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import api from '../../services/api';

import styles from './styles';

import logoImg from '../../assets/logo.png';

export default function Incidents() {

    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function navigateToDetail(incident){
        navigation.navigate('Detail', { incident });
    }

    async function loadIncidents(){

        if(loading){
            return;
        }

        if(total > 0 && incidents.length == total){
            return;
        }

        setLoading(true);

        const response = await api.get('incidents', {
            params: {page}
        });

        
        setIncidents([... incidents, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadIncidents()
    },[]);

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={logoImg} />
            <Text style={styles.headerText}>
                Total de <Text style={styles.headerTextBold}>{total} casos.</Text>
            </Text>
        </View>
        <Text style={styles.title}>Bem Vindo</Text>
        <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

        <FlatList style={styles.incidentsList}
            data={incidents}
            keyExtractor = {incident => String(incident.id)}
            showsVerticalScrollIndicator={true}
            onEndReached={loadIncidents}
            onEndReachedThreshold={0.2}
            renderItem={({ item: incident}) => (
                <View style={styles.incident}>
                    <View style={styles.incidentViewHeader}>
                        <Text style={styles.incidentViewTitle}>{incident.name}</Text>
                    </View>

                    <View style={styles.incidentView}>
                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <View style={[styles.lineHr, {marginBottom: 0,}]} />

                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <FontAwesome name="dollar" size={15} color="#41414d" style={{marginRight: 5,}} />
                            <Text style={styles.incidentProperty}>VALOR:</Text>
                            <Text style={[styles.incidentValue, {marginTop: 24, marginLeft: 10,}]}>
                                {Intl.NumberFormat('pt-BR', {
                                style: 'currency', 
                                currency: 'BRL'
                            }).format(incident.value)}
                            </Text>
                        </View>
                        <View style={styles.lineHr} />
                        <TouchableOpacity 
                            style={styles.detailsButton}
                            onPress={() => navigateToDetail(incident)}
                        >

                            <Text style={styles.detailsButtonText}>Ver Mais Detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041" />

                        </TouchableOpacity>
                    </View>

                </View>
            )}
        />
    </View>
  );
}

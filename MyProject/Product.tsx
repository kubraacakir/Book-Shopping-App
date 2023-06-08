import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import ProductService from './ProductService'
import { DataTable } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'


const Product = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        let productService = new ProductService()
        productService.getAllBook().then(result => setProducts(result.data)).catch(error => console.log(error));
    }, [])

    return (
        <SafeAreaView>
            <View>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Polisiye Romanlar</DataTable.Title>
                    </DataTable.Header>
                    {products.map((product : any) => {
                        return (
                            <DataTable.Row key={product?.id}>
                                <DataTable.Cell>{product?.id}</DataTable.Cell>
                                <DataTable.Cell>{product?.name}</DataTable.Cell>
                                <DataTable.Cell>{product?.price}</DataTable.Cell>
                                <DataTable.Cell>{product?.imagePath}</DataTable.Cell>
                                <DataTable.Cell>{product?.category}</DataTable.Cell>
                            </DataTable.Row>
                        )
                    })}

                </DataTable>
            </View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
    },
    item: {
        padding: 20,
        fontSize: 15,
        marginTop: 5,
    }
});
export default Product

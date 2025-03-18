import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Component Header chung
const SectionHeader = ({ title, onViewAll }) => {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.subHeader}>{title}</Text>
      {onViewAll && (
        <TouchableOpacity onPress={onViewAll}>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

// Component FlatList tùy chỉnh
const CustomFlatList = ({ data, renderItem, keyExtractor, horizontal, contentContainerStyle }) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={contentContainerStyle}
    />
  );
};

const HomeScreen = () => {
  // Dữ liệu
  const categories = [
    { id: '1', name: 'Pizza', image: require('../../assets/images/pizza.jpg') },
    { id: '2', name: 'Burgers', image: require('../../assets/images/burger.jpg') },
    { id: '3', name: 'Steak', image: require('../../assets/images/steak.jpg') },
    { id: '4', name: 'Fish', image: require('../../assets/images/fish.jpg') },
  ];

  const popularItems = [
    { id: '1', name: 'Food 1', source: 'By Viet Nam', price: '$15', image: require('../../assets/images/pho.jpg') },
    { id: '2', name: 'Food 2', source: 'By Viet Nam', price: '$35', image: require('../../assets/images/thitnuong.jpg') },
  ];

  const discountItems = [
    { id: '3', discount: '10% OFF', image: require('../../assets/images/pho.jpg') },
    { id: '4', discount: '20% OFF', image: require('../../assets/images/thitnuong.jpg') }, // Thêm item để kiểm tra
  ];

  // Render items
  const renderCategory = ({ item }) => (
    <View style={styles.categoryItem}>
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </View>
  );

  const renderPopularItem = ({ item }) => (
    <View style={styles.popularItem}>
      <Image source={item.image} style={styles.popularImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemSource}>{item.source}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </View>
  );

  const renderDiscountItem = ({ item }) => (
    <View style={styles.discountItem}>
      <Image source={item.image} style={styles.discountImage} />
      <View style={styles.discountTag}>
        <Text style={styles.discountText}>{item.discount}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Search bar */}
        <View style={styles.searchContainer}>
          <View style={styles.locationContainer}>
            <Ionicons name="location-outline" size={20} color="#888" />
          </View>

          <View style={styles.searchInputWrapper}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search for meals or area"
              placeholderTextColor="#888"
            />
            <Ionicons name="search-outline" size={20} color="#888" style={styles.searchIcon} />
          </View>
        </View>

        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="filter-outline" size={20} color="#F5A623" style={styles.filterIcon} />
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
        </View>

        {/* Top Categories */}
        <SectionHeader title="Top Categories" onViewAll={() => {}} />
        <CustomFlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.categoriesList}
        />

        {/* Popular Items */}
        <SectionHeader title="Popular Items" onViewAll={() => {}} />
        <CustomFlatList
          data={popularItems}
          renderItem={renderPopularItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.popularList}
        />

        {/* Sale-off Items */}
        <SectionHeader title="Sale-off Items" onViewAll={() => {}} />
        <CustomFlatList
          data={discountItems}
          renderItem={renderDiscountItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.popularList}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  locationContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  searchInputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 10,
  },
  filterContainer: {
    alignItems: 'flex-end',
    marginHorizontal: 20,
    marginTop: 10,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterIcon: {
    marginRight: 5,
  },
  filterText: {
    color: '#F5A623',
    fontSize: 16,
    fontWeight: '500',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#F5A623',
    fontSize: 14,
    fontWeight: '500',
  },
  categoriesList: {
    paddingHorizontal: 20,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 5,
  },
  categoryImage: {
    width: 120,
    height: 80,
    borderRadius: 10,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
  popularList: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  popularItem: {
    flexDirection: 'row',
    width: 240,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginVertical: 5,
  },
  popularImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 10,
  },
  itemInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingRight: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  itemSource: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  discountItem: {
    width: 200,
    marginRight: 15,
    position: 'relative',
    borderWidth: 5,
    borderColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
  },
  discountImage: {
    width: 200,
    height: 150,
    borderRadius: 10,
  },
  discountTag: {
    position: 'absolute',
    top: 10,
    right: 10, // Chuyển sang góc trên bên phải
    backgroundColor: '#FF0000', // Thay đổi thành màu đỏ
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 5,
  },
  discountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
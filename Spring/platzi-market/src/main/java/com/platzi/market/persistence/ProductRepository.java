package com.platzi.market.persistence;


import com.platzi.market.domain.Product;
import com.platzi.market.persistence.crud.ProductCrudRepository;
import com.platzi.market.persistence.entity.ProductEntity;
import com.platzi.market.persistence.mapper.ProductMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
;

/**
 * This class allows us to manage this repository in Domain terms instead Entity terms
 * o we have to return all vales in Objects from our domain App
 *
 */
@Repository
public class ProductRepository implements com.platzi.market.domain.repository.ProductRepository {

    @Autowired
    private ProductCrudRepository productCrudRepository;

    @Autowired
    private ProductMapper mapper;

    @Override
    public List<Product> getAll() {
        List<ProductEntity> products = (List<ProductEntity>) productCrudRepository.findAll();
        return mapper.toProducts(products);
    }

    @Override
    public Optional<List<Product>> getByCategory(int categoryId) {
        List<ProductEntity> productos = productCrudRepository.findByIdCategoryOrderByNameAsc(categoryId);
        return Optional.of(mapper.toProducts(productos));
    }

    /**
     * How repository returns Optional element type, we must to use a function map to go straight each elements and
     * translate to domain elements
     * @param quantity
     * @return
     */
    @Override
    public Optional<List<Product>> getRunOutProducts(int quantity) {
        Optional<List<ProductEntity>> products = productCrudRepository.findByStockLessThanAndStatus(quantity, true);
        return products.map(prods -> mapper.toProducts(prods));
    }

    @Override
    public Optional<Product> getProduct(int productId) {
        return productCrudRepository.findById(productId).map(prod -> mapper.toProduct(prod));
    }

    @Override
    public Product save(Product product) {
        ProductEntity productEntity = mapper.toProductEntity(product);
        return mapper.toProduct(productCrudRepository.save(productEntity));
    }

    @Override
    public void delete(int productId) {
        productCrudRepository.deleteById( productId );
    }
}

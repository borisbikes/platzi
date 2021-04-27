package com.platzi.market.persistence.entity;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;

@Data
@Entity
@Table(name = "compras_productos")
public class PurchaseProductEntity {

    @EmbeddedId
    private PurchaseProductIDEntity id;

    @Column(name = "cantidad")
    private Integer quantity;

    private BigDecimal total;

    @Column(name = "estado")
    private Boolean status;

    /** Many Purchases Products belongs to one Purchase, insertable and updatable are parameters
     * that disable to modify any Purchase from PurchaseProduct Entity.
     * join column belongs to the field name that relates of Purchase entity from this one.
     */
    @ManyToOne
    @MapsId("id")
    @JoinColumn(name = "id_compra", insertable = false, updatable = false)
    private PurchaseEntity purchase;

    /** Many Products belongs to one Purchases Products, insertable and updatable are parameters
     * that disable to modify any Products from PurchaseProduct Entity.
     * join column belongs to the field name that relates of Products entity from this one.
     */
    @ManyToOne
    @JoinColumn(name = "id_producto", insertable = false, updatable = false)
    private ProductEntity product;
}



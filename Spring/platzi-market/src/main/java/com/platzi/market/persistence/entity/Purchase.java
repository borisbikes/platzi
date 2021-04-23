package com.platzi.market.persistence.entity;

import jdk.jfr.Enabled;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "Compras")
public class Purchase {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    @Column(name = "id_compra")
    private Integer id;

    @Column(name = "id_cliente")
    private String idCustomer;

    @Column(name = "fecha")
    private LocalDateTime date;

    @Column(name = "medio_pago")
    private String paymentMethod;

    @Column(name = "comentario")
    private String comment;

    @Column(name = "estado")
    private Boolean status;

    /** Many Purchases done to one Customer, insertable and updatable are parameters
     * that disable to modify any Customer from Purchase Entity.
     * join column belongs to the field name that relates of Customer entity from this one.
     */
    @ManyToOne
    @JoinColumn(name = "id_cliente", insertable = false, updatable = false)
    private Customer customer;

    /**
     * To know which products were bought in this Purchase
     */
    @OneToMany(mappedBy = "product")
    private List<PurchaseProduct> products;
}

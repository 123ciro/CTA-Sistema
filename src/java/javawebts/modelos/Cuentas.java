/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javawebts.modelos;

/**
 *
 * @author Administrator
 */
public class Cuentas {
    
    private int id_cuenta;
    private Compras compra;
    private TiposPagos pago;
    private int total_compra;

    public Cuentas() {
    }

    public Cuentas(int id_cuenta, Compras compra, TiposPagos pago, int total_compra) {
        this.id_cuenta = id_cuenta;
        this.compra = compra;
        this.pago = pago;
        this.total_compra = total_compra;
    }

    public int getId_cuenta() {
        return id_cuenta;
    }

    public void setId_cuenta(int id_cuenta) {
        this.id_cuenta = id_cuenta;
    }

    public Compras getCompra() {
        return compra;
    }

    public void setCompra(Compras compra) {
        this.compra = compra;
    }

    public TiposPagos getPago() {
        return pago;
    }

    public void setPago(TiposPagos pago) {
        this.pago = pago;
    }

    public int getTotal_compra() {
        return total_compra;
    }

    public void setTotal_compra(int total_compra) {
        this.total_compra = total_compra;
    }
    
    
    
}

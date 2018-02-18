/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javawebts.modelos;

import java.sql.Date;

/**
 *
 * @author Administrator
 */
public class Cobros {
    
    private int id_cobroventa;
    private Ventas venta;
    private TiposPagos tipopago;
    private int total_venta;

    public Cobros() {
    }

    public Cobros(int id_cobroventa, Ventas venta, TiposPagos tipopago, int total_venta) {
        this.id_cobroventa = id_cobroventa;
        this.venta = venta;
        this.tipopago = tipopago;
        this.total_venta = total_venta;
    }

    public int getId_cobroventa() {
        return id_cobroventa;
    }

    public void setId_cobroventa(int id_cobroventa) {
        this.id_cobroventa = id_cobroventa;
    }

    public Ventas getVenta() {
        return venta;
    }

    public void setVenta(Ventas venta) {
        this.venta = venta;
    }

    public TiposPagos getTipopago() {
        return tipopago;
    }

    public void setTipopago(TiposPagos tipopago) {
        this.tipopago = tipopago;
    }

    public int getTotal_venta() {
        return total_venta;
    }

    public void setTotal_venta(int total_venta) {
        this.total_venta = total_venta;
    }

    
   



    
    
    
}



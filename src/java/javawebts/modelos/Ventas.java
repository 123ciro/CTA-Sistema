/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javawebts.modelos;

import java.sql.Date;

/**
 *
 * @author ALUMNO
 */
public class Ventas {
    private int id_venta;
   // private String numero_factura;
    //private String ruc_compra;
    private Date fecha_venta;
  // private String timbrado_compra;
   
    private Clientes cliente;
    private TiposPagos pago;
    private Usuarios usuario;
    private String estado_venta;
    Timbrados timbrado;
    Puestos puesto;
    Establecimientos establecimiento;
    private int numero_factura_venta;
    private String tipofactura_venta;
    
    public Ventas() {
        
    }

    public Ventas(int id_venta, Date fecha_venta, Clientes cliente, TiposPagos pago, Usuarios usuario, String estado_venta, Timbrados timbrado, Puestos puesto, Establecimientos establecimiento, int numero_factura_venta, String tipofactura_venta) {
        this.id_venta = id_venta;
        this.fecha_venta = fecha_venta;
        this.cliente = cliente;
        this.pago = pago;
        this.usuario = usuario;
        this.estado_venta = estado_venta;
        this.timbrado = timbrado;
        this.puesto = puesto;
        this.establecimiento = establecimiento;
        this.numero_factura_venta = numero_factura_venta;
        this.tipofactura_venta = tipofactura_venta;
    }

    public int getId_venta() {
        return id_venta;
    }

    public void setId_venta(int id_venta) {
        this.id_venta = id_venta;
    }

    public Date getFecha_venta() {
        return fecha_venta;
    }

    public void setFecha_venta(Date fecha_venta) {
        this.fecha_venta = fecha_venta;
    }

    public Clientes getCliente() {
        return cliente;
    }

    public void setCliente(Clientes cliente) {
        this.cliente = cliente;
    }

    public TiposPagos getPago() {
        return pago;
    }

    public void setPago(TiposPagos pago) {
        this.pago = pago;
    }

    public Usuarios getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuarios usuario) {
        this.usuario = usuario;
    }

    public String getEstado_venta() {
        return estado_venta;
    }

    public void setEstado_venta(String estado_venta) {
        this.estado_venta = estado_venta;
    }

    public Timbrados getTimbrado() {
        return timbrado;
    }

    public void setTimbrado(Timbrados timbrado) {
        this.timbrado = timbrado;
    }

    public Puestos getPuesto() {
        return puesto;
    }

    public void setPuesto(Puestos puesto) {
        this.puesto = puesto;
    }

    public Establecimientos getEstablecimiento() {
        return establecimiento;
    }

    public void setEstablecimiento(Establecimientos establecimiento) {
        this.establecimiento = establecimiento;
    }

    public int getNumero_factura_venta() {
        return numero_factura_venta;
    }

    public void setNumero_factura_venta(int numero_factura_venta) {
        this.numero_factura_venta = numero_factura_venta;
    }

    public String getTipofactura_venta() {
        return tipofactura_venta;
    }

    public void setTipofactura_venta(String tipofactura_venta) {
        this.tipofactura_venta = tipofactura_venta;
    }
    
    

    

    
   
  

    
}

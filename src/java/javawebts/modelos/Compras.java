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
public class Compras {
    private int id_compra;
    private String numero_factura;
    //private String ruc_compra;
    private Date fecha_compra;
 private String estado_compra;
    private int total_compra;
    private Proveedores proveedor;
    private Usuarios usuario;
  
    
    public Compras() {
        
    }

    public Compras(int id_compra, String numero_factura, Date fecha_compra, String estado_compra, int total_compra, Proveedores proveedor, Usuarios usuario) {
        this.id_compra = id_compra;
        this.numero_factura = numero_factura;
        this.fecha_compra = fecha_compra;
        this.estado_compra = estado_compra;
        this.total_compra = total_compra;
        this.proveedor = proveedor;
        this.usuario = usuario;
    }

    public int getId_compra() {
        return id_compra;
    }

    public void setId_compra(int id_compra) {
        this.id_compra = id_compra;
    }

    public String getNumero_factura() {
        return numero_factura;
    }

    public void setNumero_factura(String numero_factura) {
        this.numero_factura = numero_factura;
    }

    public Date getFecha_compra() {
        return fecha_compra;
    }

    public void setFecha_compra(Date fecha_compra) {
        this.fecha_compra = fecha_compra;
    }

    public String getEstado_compra() {
        return estado_compra;
    }

    public void setEstado_compra(String estado_compra) {
        this.estado_compra = estado_compra;
    }

    public int getTotal_compra() {
        return total_compra;
    }

    public void setTotal_compra(int total_compra) {
        this.total_compra = total_compra;
    }

    public Proveedores getProveedor() {
        return proveedor;
    }

    public void setProveedor(Proveedores proveedor) {
        this.proveedor = proveedor;
    }

    public Usuarios getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuarios usuario) {
        this.usuario = usuario;
    }

  

    
    
}

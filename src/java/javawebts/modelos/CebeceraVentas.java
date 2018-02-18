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
public class CebeceraVentas {

    private int id_cebeceraventa;
    private Date fecha_cebeceraventa;
    Clientes cliente;
    TiposPagos pago;
    private int total_cabeceraventa;
    Usuarios usuario;
    private String ruc_cabeceraventa;
    private String timbrado_cabeceraventa;

    public CebeceraVentas() {
    }

    public CebeceraVentas(int id_cebeceraventa, Date fecha_cebeceraventa, Clientes cliente, TiposPagos pago, int total_cabeceraventa, Usuarios usuario, String ruc_cabeceraventa, String timbrado_cabeceraventa) {
        this.id_cebeceraventa = id_cebeceraventa;
        this.fecha_cebeceraventa = fecha_cebeceraventa;
        this.cliente = cliente;
        this.pago = pago;
        this.total_cabeceraventa = total_cabeceraventa;
        this.usuario = usuario;
        this.ruc_cabeceraventa = ruc_cabeceraventa;
        this.timbrado_cabeceraventa = timbrado_cabeceraventa;
    }

    public int getId_cebeceraventa() {
        return id_cebeceraventa;
    }

    public void setId_cebeceraventa(int id_cebeceraventa) {
        this.id_cebeceraventa = id_cebeceraventa;
    }

    public Date getFecha_cebeceraventa() {
        return fecha_cebeceraventa;
    }

    public void setFecha_cebeceraventa(Date fecha_cebeceraventa) {
        this.fecha_cebeceraventa = fecha_cebeceraventa;
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

    public int getTotal_cabeceraventa() {
        return total_cabeceraventa;
    }

    public void setTotal_cabeceraventa(int total_cabeceraventa) {
        this.total_cabeceraventa = total_cabeceraventa;
    }

    public Usuarios getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuarios usuario) {
        this.usuario = usuario;
    }

    public String getRuc_cabeceraventa() {
        return ruc_cabeceraventa;
    }

    public void setRuc_cabeceraventa(String ruc_cabeceraventa) {
        this.ruc_cabeceraventa = ruc_cabeceraventa;
    }

    public String getTimbrado_cabeceraventa() {
        return timbrado_cabeceraventa;
    }

    public void setTimbrado_cabeceraventa(String timbrado_cabeceraventa) {
        this.timbrado_cabeceraventa = timbrado_cabeceraventa;
    }

}

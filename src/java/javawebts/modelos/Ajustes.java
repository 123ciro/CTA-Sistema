/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javawebts.modelos;

import java.sql.Date;

/**
 *
 * @author CTA
 */
public class Ajustes {
    
    private int id_ajuste;
    private Date fecha_ajuste;
    private Usuarios usuario;
    private String orden_ajuste;
    private String estado_ajuste;
    

   

    public Ajustes() {
    }

    public Ajustes(int id_ajuste, Date fecha_ajuste, Usuarios usuario, String orden_ajuste, String estado_ajuste) {
        this.id_ajuste = id_ajuste;
        this.fecha_ajuste = fecha_ajuste;
        this.usuario = usuario;
        this.orden_ajuste = orden_ajuste;
        this.estado_ajuste = estado_ajuste;
    }

    public int getId_ajuste() {
        return id_ajuste;
    }

    public void setId_ajuste(int id_ajuste) {
        this.id_ajuste = id_ajuste;
    }

    public Date getFecha_ajuste() {
        return fecha_ajuste;
    }

    public void setFecha_ajuste(Date fecha_ajuste) {
        this.fecha_ajuste = fecha_ajuste;
    }

    public Usuarios getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuarios usuario) {
        this.usuario = usuario;
    }

    public String getOrden_ajuste() {
        return orden_ajuste;
    }

    public void setOrden_ajuste(String orden_ajuste) {
        this.orden_ajuste = orden_ajuste;
    }

    public String getEstado_ajuste() {
        return estado_ajuste;
    }

    public void setEstado_ajuste(String estado_ajuste) {
        this.estado_ajuste = estado_ajuste;
    }

    
    
    
}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javawebts.controladores;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javawebts.modelos.Ciudades;
import javawebts.modelos.Clientes;
import javawebts.utiles.Conexion;
import javawebts.utiles.Utiles;

/**
 *
 * @author Administrator
 */
public class ClientesControlador {

    public static boolean agregar(Clientes cliente) {
        boolean valor = false;
        if (Conexion.conectar()) {
            String sql = "insert into clientes(nombre_cliente,apellido_cliente,id_ciudad,direccion_cliente,ruc_cliente,dv_cliente,cedula_cliente,telefono_cliente) "
                    + "values('" + cliente.getNombre_cliente() + "','"
                    + cliente.getApellido_cliente() + "','"
                    + cliente.getCiudad().getId_ciudad() + "','"
                    + cliente.getDireccion_cliente() + "','"
                    + cliente.getRuc_cliente() + "','"
                    + cliente.getDv_cliente() + "','"
                 
                    + cliente.getCedula_cliente() + "','"
                    + cliente.getTelefono_cliente() + "')";

            try {
                Conexion.getSt().executeUpdate(sql);
                valor = true;
            } catch (SQLException ex) {
                System.err.println("Error:" + ex);
            }
        }
        return valor;
    }

    public static Clientes buscarId(Clientes cliente) {
        if (Conexion.conectar()) {
            String sql = "select * from clientes,ciudades  where clientes.id_ciudad=ciudades.id_ciudad and id_cliente='" + cliente.getId_cliente() + "'";

            System.out.println("sql" + sql);
            try {
                ResultSet rs = Conexion.getSt().executeQuery(sql);
                if (rs.next()) {
                    cliente.setNombre_cliente(rs.getString("nombre_cliente"));
                    cliente.setApellido_cliente(rs.getString("apellido_cliente"));

                    cliente.setRuc_cliente(rs.getInt("ruc_cliente"));
                    cliente.setDv_cliente(rs.getInt("dv_cliente"));
                    cliente.setDireccion_cliente(rs.getString("direccion_cliente"));
                  
                    cliente.setCedula_cliente(rs.getInt("cedula_cliente"));
                    cliente.setTelefono_cliente(rs.getString("telefono_cliente"));

                    Ciudades ciudad = new Ciudades();
                    ciudad.setId_ciudad(rs.getInt("id_ciudad"));
                    ciudad.setNombre_ciudad(rs.getString("nombre_ciudad"));
                    cliente.setCiudad(ciudad);

                } else {
                    cliente.setId_cliente(0);
                    cliente.setNombre_cliente("");
                    cliente.setApellido_cliente("");

                    cliente.setRuc_cliente(0);
                    cliente.setDv_cliente(0);
                    Ciudades ciudad = new Ciudades();
                    ciudad.setId_ciudad(0);
                    ciudad.setNombre_ciudad("");
                    cliente.setCiudad(ciudad);

              
                  
                    cliente.setCedula_cliente(0);
                    cliente.setTelefono_cliente("");

                }
            } catch (SQLException ex) {
                System.err.println("Error:" + ex);
            }
        }
        return cliente;
    }

    public static String buscarNombre(String nombre, int pagina) {
        int offset = (pagina - 1) * Utiles.REGISTROS_PAGINA;
        String valor = "";
        if (Conexion.conectar()) {
            try {
                String sql = "select * from clientes where upper(nombre_cliente) like '%" + nombre.toUpperCase() + "%'"
                        + "order by id_cliente offset " + offset + "limit " + Utiles.REGISTROS_PAGINA;
                System.out.println("--->" + sql);
                try (PreparedStatement ps = Conexion.getConn().prepareStatement(sql)) {
                    ResultSet rs = ps.executeQuery();
                    String tabla = "";
                    while (rs.next()) {
                        tabla += "<tr>"
                                + "<td>" + rs.getInt("id_cliente") + "</td>"
                                + "<td>" + rs.getString("nombre_cliente") + "</td>"
                                + "<td>" + rs.getString("apellido_cliente") + "</td>"
                                + "<td>" + rs.getInt("id_ciudad") + "</td>"
                                + "<td>" + rs.getString("direccion_cliente") + "</td>"
                                + "<td>" + rs.getInt("ruc_cliente") +"-"+ rs.getInt("dv_cliente") + "</td>"
                            
                                + "<td>" + rs.getInt("cedula_cliente") + "</td>"
                                + "<td>" + rs.getString("telefono_cliente") + "</td>"
                                + "</tr>";
                    }
                    if (tabla.equals("")) {
                        tabla = "<tr><td colspan=2>No existen registros...</td></tr>";
                    }
                    ps.close();
                    valor = tabla;
                } catch (SQLException ex) {
                    System.err.println("Error: " + ex);
                }
                Conexion.cerrar();
            } catch (Exception ex) {
                System.err.println("Error: " + ex);
            }
        }
        Conexion.cerrar();
        return valor;
    }

    public static boolean modificar(Clientes cliente) {
        boolean valor = false;
        if (Conexion.conectar()) {
            String sql = "update clientes set nombre_cliente='" + cliente.getNombre_cliente()
                    + "',apellido_cliente='" + cliente.getApellido_cliente() + ""
                    + "',id_ciudad=" + cliente.getCiudad().getId_ciudad() + ""
                    + ",direccion_cliente='" + cliente.getDireccion_cliente() + ""
                    + "',ruc_cliente='" + cliente.getRuc_cliente() + ""
                   
                    + "',cedula_cliente=" + cliente.getCedula_cliente() + ""
                    + ",telefono_cliente='" + cliente.getTelefono_cliente() + ""
                    + "' where id_cliente=" + cliente.getId_cliente();
            System.out.println(sql);
            try {
                Conexion.getSt().executeUpdate(sql);
                valor = true;
            } catch (SQLException ex) {
                System.err.println("Error:" + ex);
            }
        }
        return valor;
    }

    public static boolean eliminar(Clientes cliente) {
        boolean valor = false;
        if (Conexion.conectar()) {
            String sql = "delete from clientes where id_cliente=" + cliente.getId_cliente();
            try {
                Conexion.getSt().executeUpdate(sql);
                valor = true;
            } catch (SQLException ex) {
                System.err.println("Error:" + ex);
            }
        }
        return valor;
    }

    public static Clientes buscarCedula(int id) {
        Clientes cliente = null;
        if (Conexion.conectar()) {
            String sql = "select* from clientes where cedula_cliente='" + id + "'";

            try {
                ResultSet rs = Conexion.getSt().executeQuery(sql);
                if (rs.next()) {
                    cliente = new Clientes();
                    cliente.setCedula_cliente(0);

                }

            } catch (SQLException ex) {
                System.err.println("Error:" + ex);
            }
        }
        return cliente;
    }

    public static Clientes buscarVerificador(int id) {
        Clientes cliente = null;
        if (Conexion.conectar()) {

            String sql = "select procedimentodv(" + id + ") as digito";

            System.out.println("sql digito " + sql);
            try {
                ResultSet rs = Conexion.getSt().executeQuery(sql);
                if (rs.next()) {
                    cliente = new Clientes();
                    
                    cliente.setDv_cliente(rs.getInt("digito"));
                    
                } else {
                    cliente = new Clientes();
                    cliente.setDv_cliente(0);

                }
            } catch (SQLException ex) {
                System.err.println("Error:" + ex);
            }
        }
        return cliente;
    }

}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javawebts.controladores;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javawebts.modelos.Clientes;
import javawebts.modelos.Cobros;
import javawebts.modelos.Compras;
import javawebts.modelos.Cuentas;
import javawebts.modelos.Proveedores;
import javawebts.modelos.Usuarios;
import javawebts.modelos.Ventas;
import javawebts.utiles.Conexion;
import javawebts.utiles.Utiles;

/**
 *
 * @author Administrator
 */
public class ComprasControlador {

    public static Compras buscarId(int id) throws SQLException {
        Compras compras = null;
        if (Conexion.conectar()) {
            try {
                String sql = "select * from compras c "
                        + "left join proveedores a on c.id_proveedor=a.id_proveedor "
                        + "left join usuarios u on u.id_usuario=c.id_usuario "
                        + "where id_compra=?";

                System.out.println(sql);
                try (PreparedStatement ps = Conexion.getConn().prepareStatement(sql)) {
                    ps.setInt(1, id);
                    ResultSet rs = ps.executeQuery();
                    if (rs.next()) {
                        compras = new Compras();
                        compras.setId_compra(rs.getInt("id_compra"));
                        compras.setNumero_factura(rs.getString("numero_factura"));
//                        Usuarios usuario = new Usuarios();
//                        usuario.setId_usuario(rs.getInt("id_usuario"));
//                        usuario.setNombre_usuario(rs.getString("nombre_usuario"));
//                        compras.setUsuario(usuario);
                        compras.setFecha_compra(rs.getDate("fecha_compra"));
                        compras.setEstado_compra(rs.getString("estado_compra"));
                        Proveedores proveedor = new Proveedores();
                        proveedor.setId_proveedor(rs.getInt("id_proveedor"));
                        proveedor.setNombre_proveedor(rs.getString("nombre_proveedor"));
                        proveedor.setRuc_proveedor(rs.getInt("ruc_proveedor"));
                        proveedor.setDv_proveedor(rs.getInt("dv_proveedor"));
                        compras.setProveedor(proveedor);

                    } else {

                        compras = new Compras();

                        compras.setId_compra(0);
                        compras.setNumero_factura("");
                        compras.setEstado_compra("ACTIVO");

                        java.sql.Date fecha_compra = new java.sql.Date(new java.util.Date().getTime());
                        compras.setFecha_compra(fecha_compra);

                        Proveedores proveedor = new Proveedores();
                        proveedor.setId_proveedor(0);
                        proveedor.setNombre_proveedor("");
                        proveedor.setRuc_proveedor(0);
                        proveedor.setDv_proveedor(0);
                        compras.setProveedor(proveedor);
//
//                        Usuarios usuario = new Usuarios();
//                        usuario.setId_usuario(0);
//                        usuario.setNombre_usuario("");
//                        compras.setUsuario(usuario);
                    }
                    ps.close();
                }
            } catch (SQLException ex) {
                System.out.println("--> " + ex.getLocalizedMessage());
            }
        }
        Conexion.cerrar();
        return compras;
    }

    public static String buscarNombre(String nombre, int pagina) throws SQLException {
        int offset = (pagina - 1) * Utiles.REGISTROS_PAGINA;
        String valor = "";
        if (Conexion.conectar()) {
            try {
                String sql = "select * from compras c "
                        + "left join proveedores p on c.id_proveedor=p.id_proveedor "
                        + "where upper(nombre_proveedor) like '%"
                        + nombre.toUpperCase()
                        + "%' "
                        + "order by id_compra "
                        + "offset " + offset + " limit " + Utiles.REGISTROS_PAGINA;
                System.out.println("--> " + sql);
                try (PreparedStatement ps = Conexion.getConn().prepareStatement(sql)) {
                    ResultSet rs = ps.executeQuery();
                    String tabla = "";
                    while (rs.next()) {
                        tabla += "<tr>"
                                + "<td>" + rs.getString("id_compra") + "</td>"
                                //   + "<td>" + rs.getInt("id_proveedor") + "</td>"
                                + "<td>" + rs.getString("nombre_proveedor") + "</td>"
                                + "<td>" + rs.getDate("fecha_compra") + "</td>"
                                + "<td>" + rs.getString("numero_factura") + "</td>"
                                + "<td>" + rs.getString("estado_compra") + "</td>"
                                + "</tr>";
                    }
                    if (tabla.equals("")) {
                        tabla = "<tr><td  colspan=5>No existen registros ...</td></tr>";
                    }
                    ps.close();
                    valor = tabla;
                }
            } catch (SQLException ex) {
                System.out.println("--> " + ex.getLocalizedMessage());
            }
        }
        Conexion.cerrar();
        return valor;
    }

    public static boolean agregar(Compras compra) throws SQLException {
        boolean valor = false;
        if (Conexion.conectar()) {
            //  int v1 = compra.getProveedor().getId_proveedor();
            //  Date v2 = compra.getFecha_compra();
            String sql = "insert into compras(id_proveedor,fecha_compra,estado_compra,id_usuario,numero_factura) "
                    + "values('" + compra.getProveedor().getId_proveedor() + "','"
                    + compra.getFecha_compra() + "','PENDIENTE','"
                    + compra.getUsuario().getId_usuario() + "','"
                    + (compra.getNumero_factura()) + "')";
            
           

            System.out.println("--> " + sql);
            try {
                Conexion.getSt().executeUpdate(sql, Statement.RETURN_GENERATED_KEYS);
                ResultSet keyset = Conexion.getSt().getGeneratedKeys();
                if (keyset.next()) {
                    int id_compra = keyset.getInt(1);
                    compra.setId_compra(id_compra);
                    Conexion.getConn().commit();
                }
                valor = true;
            } catch (SQLException ex) {
                System.out.println("--> " + ex.getLocalizedMessage());
            }
            Conexion.cerrar();
        }

        return valor;
    }

    public static boolean modificar(Compras compra) throws SQLException {
        boolean valor = false;
        if (Conexion.conectar()) {
            String sql = "update compras set id_proveedor=" + compra.getProveedor().getId_proveedor() + ","
                    + "numero_factura='" + compra.getNumero_factura() + "'"
                    + "fecha_compra='" + compra.getFecha_compra() + "'"
                    + "estado_compra='" + compra.getEstado_compra() + "'"
                    + "id_usuario=" + compra.getUsuario().getId_usuario() + ""
                    + " where id_compra=" + compra.getId_compra();
            try {

                Conexion.getSt().executeUpdate(sql);

                Conexion.getConn().commit();
                System.out.println("--> Grabado");
                valor = true;
            } catch (SQLException ex) {
                System.out.println("--> " + ex.getLocalizedMessage());
                try {
                    Conexion.getConn().rollback();
                } catch (SQLException ex1) {
                    System.out.println("--> " + ex1.getLocalizedMessage());
                }
            }
        }
        Conexion.cerrar();
        return valor;
    }

    public static boolean eliminar(Compras compra) throws SQLException {
        boolean valor = false;
        if (Conexion.conectar()) {
            String sql = "delete from compras where id_compra=?";
            try (PreparedStatement ps = Conexion.getConn().prepareStatement(sql)) {
                ps.setInt(1, compra.getId_compra());
                ps.executeUpdate();
                ps.close();
                Conexion.getConn().commit();
                valor = true;
            } catch (SQLException ex) {
                System.out.println("--> " + ex.getLocalizedMessage());
                try {
                    Conexion.getConn().rollback();
                } catch (SQLException ex1) {
                    System.out.println("--> " + ex1.getLocalizedMessage());
                }
            }
        }
        Conexion.cerrar();
        return valor;
    }

    public static boolean modificarestado(Compras compra) throws SQLException {
        boolean valor = false;
        if (Conexion.conectar()) {
            String sql = "update compras set estado_compra='ANULADO'  "
                    + " where id_compra=" + compra.getId_compra();
            try {

                Conexion.getSt().executeUpdate(sql);

                Conexion.getConn().commit();
                System.out.println("--> Grabado");
                valor = true;
            } catch (SQLException ex) {
                System.out.println("--> " + ex.getLocalizedMessage());
                try {
                    Conexion.getConn().rollback();
                } catch (SQLException ex1) {
                    System.out.println("--> " + ex1.getLocalizedMessage());
                }
            }
        }
        Conexion.cerrar();
        return valor;
    }
    
    
    
    
    
    
       public static Compras buscarIdCuenta(int id,Cuentas cuenta) throws SQLException {
        Compras compra = null;
        if (Conexion.conectar()) {
            try {
                String sql = "select c.id_compra,SUM(total_detallecompra) as total from compras c "
                        
                    
                        + " left join detallescompras dc on dc.id_compra=c.id_compra "
                      
                        
                        + " where c.id_compra=? "
                        
                        + " group by c.id_compra " ;

                System.out.println(sql);
                try (PreparedStatement ps = Conexion.getConn().prepareStatement(sql)) {
                    ps.setInt(1, id);
                    ResultSet rs = ps.executeQuery();
                    if (rs.next()) {
                        
                        
                        
                       
                        cuenta.setId_cuenta(0);
                        cuenta.setTotal_compra(rs.getInt("total"));
                        
                        
                        compra = new Compras();
                        compra.setId_compra(rs.getInt("id_compra"));
                        cuenta.setCompra(compra);
                      

                        
//
//                    Cobros cobro=new Cobros();
//                    cobro.setId_cobroventa(rs.getInt("id_cobroventa"));
//                    cobro.setFecha_cobroventa(rs.getDate("fecha_cobroventa"));
//                   
//
//                    TiposPagos pago=new TiposPagos();
//                    pago.setId_tipopago(rs.getInt("id_tipopago"));
//                     cobro.setTipopago(pago);
                    
                      

                    } else {
                        
                        
                         cuenta.setId_cuenta(0);
                       cuenta.setTotal_compra(0);
                        
                        
                            compra = new Compras();
                        compra.setId_compra(0);
                        cuenta.setCompra(compra);
                      
       }
                    ps.close();

                           
                  
                    
                }
            } catch (SQLException ex) {
                System.out.println("--> " + ex.getLocalizedMessage());
            }
        }
        Conexion.cerrar();
        return compra;
    }
    
       
       
       
         public static boolean modificarestadocompraCuenta(Compras compra) throws SQLException {
        boolean valor = false;
        if (Conexion.conectar()) {
            String sql = "update compras set estado_compra= 'PAGADO'"
                    + " where id_compra=" + compra.getId_compra();
            try {

                Conexion.getSt().executeUpdate(sql);

                Conexion.getConn().commit();
                System.out.println("--> Grabado");
                valor = true;
            } catch (SQLException ex) {
                System.out.println("--> " + ex.getLocalizedMessage());
                try {
                    Conexion.getConn().rollback();
                } catch (SQLException ex1) {
                    System.out.println("--> " + ex1.getLocalizedMessage());
                }
            }
        }
        Conexion.cerrar();
        return valor;
    }
 
    
         
         
          public static boolean agregarCuenta(Cuentas cuenta) throws SQLException {
        boolean valor = false;
        if (Conexion.conectar()) {
            String sql = "insert into cuentas "
                    + "(id_compra,id_tipopago,total_compra) "
                    + "values (?,?,?)";

            System.out.println("cirooooo"+ sql);
            try (PreparedStatement ps = Conexion.getConn().prepareStatement(sql)) {
                ps.setInt(1, cuenta.getCompra().getId_compra());
                ps.setInt(2, cuenta.getPago().getId_tipopago());
                ps.setInt(3, cuenta.getTotal_compra());

              
                ps.executeUpdate();
                ps.close();
                Conexion.getConn().commit();
                valor = true;
            } catch (SQLException ex) {
                System.out.println("--> " + ex.getLocalizedMessage());
                try {
                    Conexion.getConn().rollback();
                } catch (SQLException ex1) {
                    System.out.println("--> " + ex1.getLocalizedMessage());
                }
            }
        }
        Conexion.cerrar();
        return valor;
    }
         
          
          
          
            public static Compras buscarDuplicidad(String nu ,int id) {
     Compras    compra = null;
        if (Conexion.conectar()) {
            String sql = "select* from compras where id_proveedor='" + id + 
                    "' and numero_factura='"+ nu +"' ";
                   
            System.out.println("sql dupli" + sql);
            try {
                ResultSet rs = Conexion.getSt().executeQuery(sql);
                if (rs.next()) {
                    
                    compra=new Compras();
                    
                    compra.setNumero_factura("");
                    
                   Proveedores proveedor=new Proveedores();
                    proveedor.setId_proveedor(0);
                    compra.setProveedor(proveedor);

                }

            } catch (SQLException ex) {
                System.err.println("Error:" + ex);
            }
        }
     return compra;
    }
          
          
          
}



/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javawebts.controladores;


import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javawebts.modelos.Ventas;
import javawebts.modelos.Clientes;
import javawebts.modelos.Cobros;
import javawebts.modelos.DetallesVentas;
import javawebts.modelos.Establecimientos;
import javawebts.modelos.Puestos;
import javawebts.modelos.Timbrados;
import javawebts.modelos.TiposPagos;

import javawebts.utiles.Conexion;
import javawebts.utiles.Utiles;
import javax.print.Doc;
import javax.print.DocFlavor;
import javax.print.DocPrintJob;
import javax.print.PrintService;
import javax.print.PrintServiceLookup;
import javax.print.SimpleDoc;
import javax.print.attribute.HashPrintRequestAttributeSet;
import javax.print.attribute.PrintRequestAttributeSet;

/**
 *
 * @author Administrator
 */
public class VentasControlador {

    public static Ventas buscarId(int id) throws SQLException {
        Ventas ventas = null;
        if (Conexion.conectar()) {
            try {
                String sql = "select * from ventas c "
                        + "left join clientes a on c.id_cliente=a.id_cliente "
                    //    + "left join tipospagos t on co.id_tipopago=t.id_tipopago "
                        + "left join establecimientos e on c.id_establecimiento=e.id_establecimiento "
                        + "left join puestos p on c.id_puesto=p.id_puesto "
                        + "left join timbrados ti on ti.id_timbrado=c.id_timbrado "
                        + "left join usuarios u on u.id_usuario=c.id_usuario "
                     //   + "left join cobros co on co.id_venta=c.id_venta "
                        
                        + "where id_venta=?";

                System.out.println(sql);
                try (PreparedStatement ps = Conexion.getConn().prepareStatement(sql)) {
                    ps.setInt(1, id);
                    ResultSet rs = ps.executeQuery();
                    if (rs.next()) {
                        ventas = new Ventas();
                        ventas.setId_venta(rs.getInt("id_venta"));

                        ventas.setFecha_venta(rs.getDate("fecha_venta"));
                        ventas.setEstado_venta(rs.getString("estado_venta"));
                        ventas.setNumero_factura_venta(rs.getInt("numero_factura_venta"));
                        ventas.setTipofactura_venta(rs.getString("tipofactura_venta"));

                        Clientes cliente = new Clientes();

                        cliente.setId_cliente(rs.getInt("id_cliente"));
                        cliente.setNombre_cliente(rs.getString("nombre_cliente"));
                        cliente.setRuc_cliente(rs.getInt("ruc_cliente"));
                        cliente.setDv_cliente(rs.getInt("dv_cliente"));

                        ventas.setCliente(cliente);
//
//                    Cobros cobro=new Cobros();
//                    cobro.setId_cobroventa(rs.getInt("id_cobroventa"));
//                    cobro.setFecha_cobroventa(rs.getDate("fecha_cobroventa"));
//                   
//
//                    TiposPagos pago=new TiposPagos();
//                    pago.setId_tipopago(rs.getInt("id_tipopago"));
//                     cobro.setTipopago(pago);
                    
                        Establecimientos establecimiento = new Establecimientos();
                        establecimiento.setId_establecimiento(rs.getInt("id_establecimiento"));
                        ventas.setEstablecimiento(establecimiento);

                        Puestos puesto = new Puestos();
                        puesto.setId_puesto(rs.getInt("id_puesto"));
                        ventas.setPuesto(puesto);

                        Timbrados timbrado = new Timbrados();
                        timbrado.setId_timbrado(rs.getInt("id_timbrado"));
                        ventas.setTimbrado(timbrado);

                    } else {

                        try {

                            String sqli = "SELECT COUNT(*) AS Ultimo, COUNT(numero_factura_venta) FROM ventas ";

                            System.out.println("sss" + sqli);
                            try (PreparedStatement psi = Conexion.getConn().prepareStatement(sqli)) {
                                int num = 0;
                                ResultSet rsi = psi.executeQuery();
                                if (rsi.next()) {
                                    ventas = new Ventas();
                                    num = rsi.getInt("Ultimo");
                                    ventas.setNumero_factura_venta(num + 1);

                                    ventas.setId_venta(0);
                                    ventas.setEstado_venta("ACTIVO");
                                    java.sql.Date fecha_venta = new java.sql.Date(new java.util.Date().getTime());
                                    ventas.setFecha_venta(fecha_venta);
                                    ventas.setTipofactura_venta("");

                                    Clientes cliente = new Clientes();
                                    cliente.setId_cliente(1);
                                    cliente.setNombre_cliente("SIN NOMBRE");
                                    cliente.setRuc_cliente(0);
                                    cliente.setDv_cliente(0);
                                    ventas.setCliente(cliente);

                          
                                    
//                                     Cobros cobro=new Cobros();
//                    cobro.setId_cobroventa(0);
//                   
//                    java.sql.Date fecha_cobroventa = new java.sql.Date(new java.util.Date().getTime());
//                     cobro.setFecha_cobroventa(fecha_cobroventa);
//                     
//
//                    TiposPagos pago=new TiposPagos();
//                    pago.setId_tipopago(0);
//                     cobro.setTipopago(pago);
                    
                                    

                                    Timbrados timbrado = new Timbrados();
                                    timbrado.setId_timbrado(0);
                                    ventas.setTimbrado(timbrado);

                                } else {
                                    num = 1;
                                }

                                psi.close();
                            }
                        } catch (SQLException ex) {
                            System.out.println("--> " + ex.getLocalizedMessage());

                        }
                    }
                    ps.close();
                }
            } catch (SQLException ex) {
                System.out.println("--> " + ex.getLocalizedMessage());
            }
        }
        Conexion.cerrar();
        return ventas;
    }

    public static String buscarNombre(String nombre, int pagina) throws SQLException {
        int offset = (pagina - 1) * Utiles.REGISTROS_PAGINA;
        String valor = "";
        if (Conexion.conectar()) {
            try {
                String sql = "select * from ventas c "
                        + "left join clientes p on c.id_cliente=p.id_cliente "
                    //    + "left join tipospagos t on c.id_tipopago=t.id_tipopago "
                        + "where upper(nombre_cliente) like '%"
                        + nombre.toUpperCase()
                        + "%' "
                        + "order by id_venta "
                        + "offset " + offset + " limit " + Utiles.REGISTROS_PAGINA;
                System.out.println("--> " + sql);
                try (PreparedStatement ps = Conexion.getConn().prepareStatement(sql)) {
                    ResultSet rs = ps.executeQuery();
                    String tabla = "";
                    while (rs.next()) {
                        tabla += "<tr>"
                                + "<td>" + rs.getString("id_venta") + "</td>"
                                //      + "<td>" + rs.getInt("id_cliente") + "</td>"
                                + "<td>" + rs.getInt("numero_factura_venta") + "</td>"
                                + "<td>" + rs.getString("nombre_cliente") + "</td>"
                                + "<td>" + rs.getString("ruc_cliente") + "</td>"
                                + "<td>" + rs.getDate("fecha_venta") + "</td>"
                                //+ "<td>" + rs.getInt("id_tipopago") + "</td>"
                          //      + "<td>" + rs.getString("nombre_tipopago") + "</td>"
                                + "<td>" + rs.getString("estado_venta") + "</td>"
                                + "<td>" + rs.getString("tipofactura_venta") + "</td>"
                                //              + "<td>" + rs.getString("numero_factura") + "</td>"
                                //            + "<td>" + rs.getString("timbrado_venta") + "</td>"

                                + "</tr>";
                    }
                    if (tabla.equals("")) {
                        tabla = "<tr><td  colspan=6>No existen registros ...</td></tr>";
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

    public static boolean agregar(Ventas venta) throws SQLException {
        boolean valor = false;
        if (Conexion.conectar()) {
            //  int v1 = venta.getCliente().getId_cliente();
            //  Date v2 = venta.getFecha_venta();
            String sql = "insert into ventas(id_cliente,estado_venta,id_establecimiento,id_puesto,id_timbrado,id_usuario,tipofactura_venta,numero_factura_venta,fecha_venta) "
                    + "values('" + venta.getCliente().getId_cliente() + "','"
                    + "ACTIVO','"
                    + venta.getEstablecimiento().getId_establecimiento() + "','"
                    + venta.getPuesto().getId_puesto() + "','"
                    + venta.getTimbrado().getId_timbrado() + "','"
                    + venta.getUsuario().getId_usuario() + "','"
                    + venta.getTipofactura_venta() + "','"
                    + venta.getNumero_factura_venta() + "','"
                    + venta.getFecha_venta() + "')";
            System.out.println("--> " + sql);
            try {
                Conexion.getSt().executeUpdate(sql, Statement.RETURN_GENERATED_KEYS);
                ResultSet keyset = Conexion.getSt().getGeneratedKeys();
                if (keyset.next()) {
                    int id_venta = keyset.getInt(1);

                    venta.setId_venta(id_venta);

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

    public static boolean modificar(Ventas venta) throws SQLException {
        boolean valor = false;
        if (Conexion.conectar()) {
            String sql = "update ventas set id_cliente=" + venta.getCliente().getId_cliente() + ","
                    + "fecha_venta='" + venta.getFecha_venta() + "'"
                    + "id_tipopago=" + venta.getPago().getId_tipopago() + ""
                 
                    + " where id_venta=" + venta.getId_venta();
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

    public static boolean modificarestadoventa(Ventas venta) throws SQLException {
        boolean valor = false;
        if (Conexion.conectar()) {
            String sql = "update ventas set estado_venta= 'ANULADO'"
                    + " where id_venta=" + venta.getId_venta();
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

    public static boolean eliminar(Ventas venta) throws SQLException {
        boolean valor = false;
        if (Conexion.conectar()) {
            String sql = "delete from ventas where id_venta=?";
            try (PreparedStatement ps = Conexion.getConn().prepareStatement(sql)) {
                ps.setInt(1, venta.getId_venta());
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

    public static Ventas buscarNumFactura(int id) throws SQLException {
        Ventas ventas = null;

        if (Conexion.conectar()) {
            try {
                String sqli = "SELECT COUNT(*) AS Ultimo, COUNT(numero_factura_venta) FROM ventas ";

                System.out.println("sss" + sqli);
                try (PreparedStatement psi = Conexion.getConn().prepareStatement(sqli)) {

                    ResultSet rsi = psi.executeQuery();
                    if (rsi.next()) {
                        ventas = new Ventas();

                        ventas.setNumero_factura_venta(rsi.getInt("Ultimo"));

                    }
                    psi.close();
                }
            } catch (SQLException ex) {
                System.out.println("--> " + ex.getLocalizedMessage());
            }
        }
        Conexion.cerrar();
        return ventas;
    }
    
    
    
//    void imprimirFactura(){
//        
//        
//        
//        
//        
//        
//        Ventas venta=new Ventas();
//        
//        DetallesVentas detalle=new DetallesVentas();
//        
//
//        PrinterMatrix printer = new PrinterMatrix();
//
//        Extenso e = new Extenso();
//
//        e.setNumber(101.85);
//
//
//        //Definir el tamanho del papel para la impresion  aca 25 lineas y 80 columnas
//        printer.setOutSize(60, 80);
//        //Imprimir * de la 2da linea a 25 en la columna 1;
//       // printer.printCharAtLin(2, 25, 1, "*");
//        //Imprimir * 1ra linea de la columa de 1 a 80
//       printer.printCharAtCol(1, 1, 80, "=");
//        //Imprimir Encabezado nombre del La EMpresa
//       printer.printTextWrap(1, 2, 30, 80, "FACTURA DE VENTA");
//       //printer.printTextWrap(linI, linE, colI, colE, null);
//       printer.printTextWrap(2, 3, 1, 22, "Num. Boleta : " + venta.getNumero_factura_venta());
//       printer.printTextWrap(2, 3, 25, 55, "Fecha de Emision: " + venta.getFecha_venta() );
//       printer.printTextWrap(2, 3, 60, 80, "Hora: 12:22:51");
//       printer.printTextWrap(3, 3, 1, 80, "Vendedor.  : "+ venta.getUsuario().getId_usuario() +" - " + venta.getUsuario().getNombre_usuario());
//       printer.printTextWrap(4, 4, 1, 80, "CLIENTE: " + venta.getCliente().getNombre_cliente());
//       printer.printTextWrap(5, 5, 1, 80, "RUC/CI.: " + venta.getCliente().getRuc_cliente());
//       printer.printTextWrap(6, 6, 1, 80, "DIRECCION: " +  "");
//       printer.printCharAtCol(7, 1, 80, "=");
//       printer.printTextWrap(7, 8, 1, 80, "Codigo          Descripcion                Cant.      P  P.Unit.      P.Total");
//       printer.printCharAtCol(9, 1, 80, "-");
//       int filas = ventas.getRowCount();
//
//        for (int i = 0; i < filas; i++) {
//         printer.printTextWrap(9 + i, 10, 1, 80, tblVentas.getValueAt(i,0).toString()+"|"+tblVentas.getValueAt(i,1).toString()+"| "+tblVentas.getValueAt(i,2).toString()+"| "+tblVentas.getValueAt(i,3).toString()+"|"+ tblVentas.getValueAt(i,4).toString());
//         }
//
//        if(filas > 15){
//        printer.printCharAtCol(filas + 1, 1, 80, "=");
//        printer.printTextWrap(filas + 1, filas + 2, 1, 80, "TOTAL A PAGAR " + txtVentaTotal.getText());
//        printer.printCharAtCol(filas + 2, 1, 80, "=");
//        printer.printTextWrap(filas + 2, filas + 3, 1, 80, "Esta boleta no tiene valor fiscal, solo para uso interno.: + Descripciones........");
//        }else{
//        printer.printCharAtCol(25, 1, 80, "=");
//        printer.printTextWrap(26, 26, 1, 80, "TOTAL A PAGAR " + txtVentaTotal.getText());
//        printer.printCharAtCol(27, 1, 80, "=");
//        printer.printTextWrap(27, 28, 1, 80, "Esta boleta no tiene valor fiscal, solo para uso interno.: + Descripciones........");
//
//        }
//        printer.toFile("impresion.txt");
//
//      FileInputStream inputStream = null;
//        try {
//            inputStream = new FileInputStream("impresion.txt");
//        } catch (FileNotFoundException ex) {
//            ex.printStackTrace();
//        }
//        if (inputStream == null) {
//            return;
//        }
//
//        DocFlavor docFormat = DocFlavor.INPUT_STREAM.AUTOSENSE;
//        Doc document = new SimpleDoc(inputStream, docFormat, null);
//
//        PrintRequestAttributeSet attributeSet = new HashPrintRequestAttributeSet();
//
//        PrintService defaultPrintService = PrintServiceLookup.lookupDefaultPrintService();
//
//
//        if (defaultPrintService != null) {
//            DocPrintJob printJob = defaultPrintService.createPrintJob();
//            try {
//                printJob.print(document, attributeSet);
//
//            } catch (Exception ex) {
//                ex.printStackTrace();
//            }
//        } else {
//            System.err.println("No existen impresoras instaladas");
//        }
//
//        //inputStream.close();
//
//    }
//    



    
    
    
    
    
    
    
    
    
    
    
    
 public static boolean agregarCobro(Cobros cobro) throws SQLException {
        boolean valor = false;
        if (Conexion.conectar()) {
            String sql = "insert into cobros_ventas "
                    + "(id_venta,id_tipopago,total_venta) "
                    + "values (?,?,?)";

            System.out.println(" sicooo"+ sql);
            try (PreparedStatement ps = Conexion.getConn().prepareStatement(sql)) {
                ps.setInt(1, cobro.getVenta().getId_venta());
                ps.setInt(2, cobro.getTipopago().getId_tipopago());
                ps.setInt(3, cobro.getTotal_venta());

           
                
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
  
    public static boolean modificarestadoventaCobro(Ventas venta) throws SQLException {
        boolean valor = false;
        if (Conexion.conectar()) {
            String sql = "update ventas set estado_venta= 'FACTURADO'"
                    + " where id_venta=" + venta.getId_venta();
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
 
    
    
    
    
    
    
     public static Ventas buscarIdCobro(int id,Cobros cobro) throws SQLException {
        Ventas ventas = null;
        if (Conexion.conectar()) {
            try {
                String sql = "select v.id_venta,SUM(total_detalleventa) as total from ventas v "
                        
                    
                        + " left join detallesventas dv on dv.id_venta=v.id_venta "
                      
                        
                        + " where v.id_venta=? "
                        
                        + " group by v.id_venta " ;

                System.out.println(sql);
                try (PreparedStatement ps = Conexion.getConn().prepareStatement(sql)) {
                    ps.setInt(1, id);
                    ResultSet rs = ps.executeQuery();
                    if (rs.next()) {
                        
                        
                        
                       
                        cobro.setId_cobroventa(0);
                        cobro.setTotal_venta(rs.getInt("total"));
                        
                        
                        ventas = new Ventas();
                        ventas.setId_venta(rs.getInt("id_venta"));
                        cobro.setVenta(ventas);
                      

                        
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
                        
                        
                         cobro.setId_cobroventa(0);
                        cobro.setTotal_venta(0);
                        
                        
                            ventas = new Ventas();
                        ventas.setId_venta(0);
                        cobro.setVenta(ventas);
                      
       }
                    ps.close();

                           
                  
                    
                }
            } catch (SQLException ex) {
                System.out.println("--> " + ex.getLocalizedMessage());
            }
        }
        Conexion.cerrar();
        return ventas;
    }
    
    
    
    
    
    
    
    
    
    
    
    
}
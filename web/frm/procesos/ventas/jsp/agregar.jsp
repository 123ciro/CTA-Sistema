


<%@page import="javawebts.modelos.Cobros"%>
<%@page import="javawebts.modelos.Timbrados"%>
<%@page import="javawebts.modelos.Puestos"%>
<%@page import="javawebts.modelos.Establecimientos"%>
<%@page import="javawebts.modelos.TiposPagos"%>
<%@page import="javawebts.controladores.VentasControlador"%>
<%@page import="javawebts.modelos.Ventas"%>
<%@page import="javawebts.modelos.Clientes"%>
<%@page import="javawebts.controladores.ComprasControlador"%>
<%@page import="javawebts.modelos.Usuarios"%>
<%@page import="javawebts.utiles.Utiles"%>
<%@page import="javawebts.modelos.Compras"%>
<%@page import="javawebts.modelos.Proveedores"%>


<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%
      
      
       
    
    int numero_factura_venta = Integer.parseInt(request.getParameter("numero_factura_venta"));
    int id_establecimiento = Integer.parseInt(request.getParameter("id_establecimiento"));
    int id_puesto = Integer.parseInt(request.getParameter("id_puesto"));
    int id_venta = Integer.parseInt(request.getParameter("id_venta"));
   int id_usuario = Integer.parseInt(request.getParameter("id_usuario"));
    int id_cliente = Integer.parseInt(request.getParameter("id_cliente")); 
  //  int id_tipopago = Integer.parseInt(request.getParameter("id_tipopago")); 
    
     int id_timbrado = Integer.parseInt(request.getParameter("id_timbrado")); 
  String sfecha_venta = request.getParameter("fecha_venta");
  String estado_venta = request.getParameter("estado_venta");
  String tipofactura_venta = request.getParameter("tipofactura_venta");
 
  //String timbrado_compra = request.getParameter("timbrado_compra");
 // String numero_factura = request.getParameter("numero_factura");
 // String nombre_usuario = request.getParameter("nombre_usuario");
    java.sql.Date fecha_venta = Utiles.stringToSqlDate(sfecha_venta);
    
     
    
           
   Establecimientos establecimiento=new Establecimientos();
   establecimiento.setId_establecimiento(id_establecimiento);
   
     Puestos puesto=new Puestos();
     puesto.setId_puesto(id_puesto);
       
    
    String tipo = "error";
    String mensaje = "Datos no agregados.";
    
    Clientes cliente=new Clientes();
    cliente.setId_cliente(id_cliente);
   
  //  TiposPagos pago=new TiposPagos();
   // pago.setId_tipopago(id_tipopago);
    
    Timbrados timbrado=new Timbrados();
    timbrado.setId_timbrado(id_timbrado);
    
         Usuarios usuario = new Usuarios();
           usuario.setId_usuario(id_usuario);
      //      usuario.setNombre_usuario(nombre_usuario);
    Ventas venta = new Ventas();
    venta.setId_venta(id_venta);
    venta.setFecha_venta(fecha_venta);
    venta.setTipofactura_venta(tipofactura_venta);
    venta.setNumero_factura_venta(numero_factura_venta);
    venta.setEstado_venta(estado_venta);
    venta.setCliente(cliente);
   // venta.setPago(pago);
    venta.setEstablecimiento(establecimiento);
    venta.setPuesto(puesto);
    venta.setTimbrado(timbrado);
    venta.setUsuario(usuario);
      //compra.setUsuario(usuario);
      
      Cobros cobro=new Cobros();
      
      
      
    
    if (VentasControlador.agregar(venta)) {
        tipo = "success";
        mensaje = "Datos agregados.";
    }

    JSONObject obj = new JSONObject();
    obj.put("tipo", tipo);
    obj.put("mensaje", mensaje);
    obj.put("id_venta", String.valueOf(venta.getId_venta()));
    obj.put("numero_factura_venta", String.valueOf(venta.getNumero_factura_venta()));
    obj.put("id_establecimiento", String.valueOf(venta.getEstablecimiento().getId_establecimiento()));
    obj.put("id_puesto", String.valueOf(venta.getPuesto().getId_puesto()));
    out.print(obj);
    out.flush();
    
%>
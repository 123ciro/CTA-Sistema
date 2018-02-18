

<%@page import="javawebts.utiles.Utiles"%>
<%@page import="javawebts.utiles.Utiles"%>
<%@page import="net.sf.jasperreports.engine.JasperPrint"%>
<%@page import="javawebts.utiles.Conexion"%>
<%@page import="javawebts.utiles.Conexion"%>
<%@page import="net.sf.jasperreports.engine.JasperFillManager"%>
<%@page import="net.sf.jasperreports.engine.JasperExportManager"%>
<%@page contentType="application/pdf" %>

<%@page import="java.util.Map"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.sql.Connection"%>
<%@page import="javax.naming.InitialContext"%>
<%
    String dirPath = "/rpt";
    String realPath = this.getServletContext().getRealPath(dirPath);
    String listado = request.getParameter("l");
    //int DESDE = Integer.parseInt(request.getParameter("d"));
    // int HASTA = Integer.parseInt(request.getParameter("h"));

    String sfecha_venta = request.getParameter("d");

    java.sql.Date d = Utiles.stringToSqlDate(sfecha_venta);

     String sfecha_venta1 = request.getParameter("h");

    java.sql.Date h = Utiles.stringToSqlDate(sfecha_venta1);
    
   
     
    String jasperReport =  "facturafecha.jasper";
    JasperPrint print = null;
    Connection conn = null;

    try {

        Conexion.conectar();
        conn = Conexion.getConn();
        Map parameters = new HashMap();
        parameters.put("DESDE", d);
        parameters.put("HASTA", h);
        print = JasperFillManager.fillReport(realPath + "//" + jasperReport, parameters, conn);
        response.setContentType("application/pdf");
        JasperExportManager.exportReportToPdfStream(print, response.getOutputStream());
        response.getOutputStream().flush();
        response.getOutputStream().close();
    } catch (Exception ex) {
        ex.printStackTrace();
        System.out.println(ex.getMessage());
    } finally {
        if (conn != null) {
            conn.close();
        }
    }
%>


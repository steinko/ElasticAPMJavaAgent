package org.steinko.elastic.apm.agent;

import java.util.Set;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

public class ElasticApmWebAppApplcationInitialiser implements WebApplicationInitializer {
	
	/**
     * Register and configure all Servlet container components necessary to power the web application.
     */
    @Override
    public void onStartup(final ServletContext sc) throws ServletException {
    	servletContext.setInitParameter(
    	          "spring.profiles.active", "dev");
    }

}

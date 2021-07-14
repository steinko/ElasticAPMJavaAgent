package org.steinko.elastic.apm.agent;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Profile;
import javax.sql.DataSource;

@Profile("dev")
@Configuration

public class DevDataSourceConfig {
	@Bean
	public DataSource dataSource() {
		
		DataSourceBuilder dataSourceBuilder = DataSourceBuilder.create();
        dataSourceBuilder.driverClassName("org.hibernate.dialect.PostgreSQLDialect");
        dataSourceBuilder.url("jdbc:postgresql://postgres.steinko.org:5432/postgres");
        dataSourceBuilder.username("postgres");
        dataSourceBuilder.password("root");
        return dataSourceBuilder.build();
	}
	
}

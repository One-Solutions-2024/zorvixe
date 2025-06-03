# Use official PHP image with Apache
FROM php:8.2-apache

# Install PHP extensions needed by CodeIgniter
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Enable Apache rewrite module (important for CodeIgniter URLs)
RUN a2enmod rewrite

# Copy your app files into the container's web root
COPY . /var/www/html/

# Set correct permissions for Apache to access files
RUN chown -R www-data:www-data /var/www/html/

# Expose port 80 (Apache default)
EXPOSE 80

# Start Apache in the foreground
CMD ["apache2-foreground"]

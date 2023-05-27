document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('dataForm');
    const table = document.getElementById('dataTable');
    const tbody = table.querySelector('tbody');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Get form inputs
      const timeInput = form.elements.time;
      const moistureInput = form.elements.moisture;
      const temperatureInput = form.elements.temperature;
      const humidityInput = form.elements.humidity;
  
      // Create a new table row
      const newRow = document.createElement('tr');
  
      // Create table cells for each data
      const timeCell = document.createElement('td');
      timeCell.textContent = timeInput.value;
      newRow.appendChild(timeCell);
  
      const moistureCell = document.createElement('td');
      moistureCell.textContent = moistureInput.value + '%';
      newRow.appendChild(moistureCell);
  
      const temperatureCell = document.createElement('td');
      temperatureCell.textContent = temperatureInput.value + '°C';
      newRow.appendChild(temperatureCell);
  
      const humidityCell = document.createElement('td');
      humidityCell.textContent = humidityInput.value + '%';
      newRow.appendChild(humidityCell);
  
      const deleteCell = document.createElement('td');
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
        newRow.remove();
      });
      deleteCell.appendChild(deleteButton);
      newRow.appendChild(deleteCell);
  
      // Append the new row to the table body
      tbody.appendChild(newRow);
  
      // Reset form inputs
      form.reset();
    });
  });
  
'use client';

import React from 'react';
import ReactFlow from 'reactflow';
 
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '0',
    position: { x: 0, y: 0 },
    data: { 
      label: 'Cientista da Computação', 
    }
  },

  // 1X
  { 
    id: '10', 
    position: { x: 200, y: 150 },
    data: {
      label: 'Programador'
    }
  },
  { 
    id: '11', 
    position: { x: -100, y: 150 },
    data: {
      label: 'Pesquisador'
    }
  },
  {
    id: '12',
    position: { x: -300, y: 150 },
    data: {
      label: 'Professor'
    }
  },
  {
    id: '13',
    position: { x: -500, y: 150 },
    data: {
      label: 'Consultor'
    }
  },

  // 3X
  {
    id: '30',
    position: { x: 600, y: 300 },
    data: {
      label: 'Web'
    }
  },
  {
    id: '31',
    position: { x: 400, y: 300 },
    data: {
      label: 'Mobile'
    }
  },
  {
    id: '32',
    position: { x: 200, y: 300 },
    data: {
      label: 'Desktop'
    }
  },
  {
    id: '33',
    position: { x: 800, y: 300 },
    data: {
      label: 'Embarcados'
    }
  },
  {
    id: '34',
    position: { x: 1000, y: 300 },
    data: {
      label: 'IA'
    }
  },
  {
    id: '35',
    position: { x: 1200, y: 300 },
    data: {
      label: 'Segurança'
    }
  },
  {
    id: '36',
    position: { x: 0, y: 300 },
    data: {
      label: 'Dados'
    }
  },
  {
    id: '37',
    position: { x: -200, y: 300 },
    data: {
      label: 'Academia'
    }
  },
  {
    id: '38',
    position: { x: -400, y: 300 },
    data: {
      label: 'Cursos Livres'
    }
  },
  {
    id: '40',
    position: { x: 850, y: 450 },
    data: {
      label: 'Frontend'
    }
  },
  {
    id: '41',
    position: { x: 650, y: 450 },
    data: {
      label: 'Backend'
    }
  },
  {
    id: '42',
    position: { x: 450, y: 450 },
    data: {
      label: 'Fullstack'
    }
  },
  {
    id: '43',
    position: { x: 250, y: 450 },
    data: {
      label: 'Infra'
    }
  },
  {
    id: '44',
    position: { x: 50, y: 450 },
    data: {
      label: 'Games'
    }
  },
  {
    id: '45',
    position: { x: 1050, y: 450 },
    data: {
      label: 'Robótica'
    }
  },
  {
    id: '46',
    position: { x: 1250, y: 450 },
    data: {
      label: 'IOT'
    }
  },
  {
    id: '47',
    position: { x: -150, y: 450 },
    data: {
      label: 'Analista de Dados'
    }
  },
];

const initialEdges = [
  {
    id: 'e1-2',
    source: '0',
    target: '10'
  },
  {
    id: 'e1-3',
    source: '0',
    target: '11'
  },
  {
    id: 'e1-4',
    source: '0',
    target: '12'
  },
  {
    id: 'e1-5',
    source: '0',
    target: '13'
  },

  // 1X to 3X
  {
    id: 'e2-30',
    source: '10',
    target: '30'
  },
  {
    id: 'e2-31',
    source: '10',
    target: '31'
  },
  {
    id: 'e2-32',
    source: '10',
    target: '32'
  },
  {
    id: 'e2-33',
    source: '10',
    target: '33'
  },
  {
    id: 'e2-36',
    source: '10',
    target: '36'
  },
  {
    id: 'e2-34',
    source: '10',
    target: '34'
  },
  {
    id: 'e2-35',
    source: '10',
    target: '35'
  },
  {
    id: 'e2-37',
    source: '11',
    target: '37'
  },
  {
    id: 'e2-371',
    source: '12',
    target: '37'
  },
  {
    id: 'e2-38',
    source: '12',
    target: '38'
  },
  

  // 3X to 4X
  {
    id: 'e3-40-30-40',
    source: '30',
    target: '40'
  },
  {
    id: 'e3-41-30-41',
    source: '30',
    target: '41'
  },
  {
    id: 'e3-42-30-42',
    source: '30',
    target: '42'
  },
  {
    id: 'e3-43-30-43',
    source: '30',
    target: '43'
  },
  {
    id: 'e3-40-31-40',
    source: '31',
    target: '40'
  },
  {
    id: 'e3-41-31-41',
    source: '31',
    target: '41'
  },
  {
    id: 'e3-42-31-42',
    source: '31',
    target: '42'
  },
  {
    id: 'e3-43-31-43',
    source: '31',
    target: '43'
  },
  {
    id: 'e3-40-32-40',
    source: '32',
    target: '40'
  },
  {
    id: 'e3-41-32-41',
    source: '32',
    target: '41'
  },
  {
    id: 'e3-42-32-42',
    source: '32',
    target: '42'
  },
  {
    id: 'e3-43-32-43',
    source: '32',
    target: '43'
  },
  {
    id: 'e3-44-30-44',
    source: '30',
    target: '44'
  },
  {
    id: 'e3-44-31-44',
    source: '31',
    target: '44'
  },
  {
    id: 'e3-44-32-44',
    source: '32',
    target: '44'
  },
  {
    id: 'e3-45-33-45',
    source: '33',
    target: '45'
  },
  {
    id: 'e3-46-33-46',
    source: '33',
    target: '46'
  },
  {
    id: 'e3-47-36-47',
    source: '36',
    target: '47'
  },
];
 
export default function Map() {
  return (
    <div 
      className="border mt-2"
      style={{ width: '100%', height: '600px' }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>
  );
};
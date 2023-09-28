import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const estilos = {
    grafico: {
        padding:"0",
    },
       minMax: {    
      fontFamily: "-apple-system",
      color: "rgb(39 41 209)",
      border: "solid 9px #35476c",
      fontWeight: "bolder",
      maxHeight: "250px",
    },
}

function GraficoBarSimple() {
  return (
    <div style={estilos.minMax}>
        <BarChart spacing={2}
        xAxis={[
            {
            id: 'barCategories',
            data: ['12AM', '3AM', '6AM','9AM', '12AM', '3PM','6PM','9PM'],
            scaleType: 'band',
            },
        ]}
        series={[
            {
            data: [2, 5, 3, 6, 3, 4 , 4, 2],
            color: '#298482',
            marginTop:"0",
            marginBottom:"0",
            padding:"0",
            },
            
          
        ]}
        width={450}
        height={250}
        padding={0}
        margin={0}
        marginBottom={0}
        marginTop={0}
        />
      </div>
    
  );
}
export {GraficoBarSimple};

// <Box sx={{ position: 'relative', display: 'inline-flex' }}>
//       <CircularProgress variant="determinate" {...props} />
//       <Box
//         sx={{
//           top: 0,
//           left: 0,
//           bottom: 0,
//           right: 0,
//           position: 'absolute',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Typography variant="caption" component="div" color="text.secondary">
//           {`${Math.round(props.value)}%`}
//         </Typography>
//       </Box>
//     </Box>

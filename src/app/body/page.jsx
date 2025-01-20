import { Card, CardHeader, CardBody, CardFooter} from "@heroui/react"
import { FaCircle } from 'react-icons/fa'; 

const Body = () => {
  return (
    <>
        <div className="p-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-4">
            <Card className="row-span-2">
                <CardHeader >
                    Dashboard
                </CardHeader>
                <CardBody>
                    100
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                   Pending Approvals
                </CardHeader>
                <CardBody>
                <div className="flex items-center justify-between">
                    <p>100</p>
                    <FaCircle/>
                   </div>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    Rejected Tasks
                </CardHeader>
                <CardBody>
                   <div className="flex items-center justify-between">
                    <p>100</p>
                    <FaCircle/>
                   </div>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    Repair Tasks
                </CardHeader>
                <CardBody> 
                <div className="flex items-center justify-between">
                    <p>100</p>
                    <FaCircle/>
                   </div>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    Initiate Repossession
                </CardHeader>
                <CardBody>
                <div className="flex items-center justify-between">
                    <p>100</p>
                    <FaCircle/>
                   </div>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    Tasks in progress
                </CardHeader>
                <CardBody>
                <div className="flex items-center justify-between">
                    <p>100</p>
                    <FaCircle/>
                   </div>
                </CardBody>
            </Card>
            <Card>
                <CardHeader></CardHeader>
                
                <CardBody>
                    Notes
                </CardBody>
            </Card>
            <Card>
                <CardHeader></CardHeader>
                <CardBody>
                    setting
                </CardBody>
            </Card>
        </div>
    </div>
      
    </>
  )
}

export default Body
